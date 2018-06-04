using DAO;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace rozetka_test_exercise.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CustomersController : ApiController
    {
        MyDAO myDAO = new MyDAO();

        [HttpGet]
        [Route("api/GetAllFullNames")]
        public List<Customer> GetAllFullNames()
        {
            return myDAO.GetAllFullNames();
        }

        [HttpGet]
        [Route("api/GetCustomerInfoById/{id}")]
        public Customer spGetCustomerInfoById(int id)
        {
            return myDAO.spGetCustomerInfoById(id);
        }

        [HttpGet]
        [Route("api/GetCustomerOrdersById/{id}")]
        public List<Order> spGetCustomerOrdersById(int id)
        {
            return myDAO.spGetCustomerOrdersById(id);
        }

        [HttpGet]
        [Route("api/CustomerOrdersCOSTS/{id}")]
        public Decimal spCustomerOrdersCOSTS(int id)
        {
            return myDAO.spCustomerOrdersCOSTS(id);
        }
    }
}