using Model;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace DAO
{
    public class MyDAO
    {
        string connectionString = ConfigurationManager.ConnectionStrings["con"].ConnectionString;
        
        public List<Customer> GetAllFullNames()
        {
            List<Customer> customers = new List<Customer>();
            SqlConnection con = new SqlConnection(connectionString);
            
            SqlCommand cmd = new SqlCommand("spGetAllFullNames", con);
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            con.Open();
            var reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                customers.Add(new Customer()
                {
                    Id = reader.GetFieldValue<int>(0),
                    FName = reader.GetFieldValue<string>(1),
                    MName = reader.GetFieldValue<string>(2),
                    LName = reader.GetFieldValue<string>(3)
                });
            }
            reader.Close();
            con.Close();
            return customers;
        }

        public Customer spGetCustomerInfoById(int id)
        {
            Customer customer = null;
            SqlConnection con = new SqlConnection(connectionString);

            SqlCommand cmd = new SqlCommand("spGetCustomerInfoById", con);
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Id", id);
            con.Open();
            var reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                customer = new Customer()
                {
                    Id = reader.GetFieldValue<int>(0),
                    FName = reader.GetFieldValue<string>(1),
                    MName = reader.GetFieldValue<string>(2),
                    LName = reader.GetFieldValue<string>(3),
                    DateOfBirth = reader.GetDateTime(4),
                    Phone = reader.GetFieldValue<string>(5)
                };
            }
            reader.Close();
            con.Close();
            return customer;
        }

        public List<Order> spGetCustomerOrdersById(int id)
        {
            List < Order> orders = new List<Order>();
            SqlConnection con = new SqlConnection(connectionString);

            SqlCommand cmd = new SqlCommand("spGetCustomerOrdersById", con);
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Id", id);
            con.Open();
            var reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                orders.Add(new Order()
                {
                    Id = reader.GetFieldValue<int>(0),
                    OrderNo = reader.GetFieldValue<string>(1),
                    OrderDate = reader.GetDateTime(2),
                    OrderPrice = reader.GetFieldValue<decimal>(3),
                    Customer_Id = id
                });
            }
            reader.Close();
            con.Close();
            return orders;
        }

        public Decimal spCustomerOrdersCOSTS(int id)
        {
            Decimal SumOfMoney = 0;
            SqlConnection con = new SqlConnection(connectionString);

            SqlCommand cmd = new SqlCommand("spCustomerOrdersCOSTS", con);
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.Parameters.Add("@Customer_id", SqlDbType.Int).Value = id;
            cmd.Parameters.Add("@SumOfMoney", SqlDbType.Decimal).Value = 0;
            
            con.Open();

            var reader = cmd.ExecuteReader();

            while (reader.Read())
            {
                SumOfMoney = reader.GetFieldValue<Decimal>(0);      
            }
            reader.Close();
            con.Close();
            return SumOfMoney;
        }
    }
}

