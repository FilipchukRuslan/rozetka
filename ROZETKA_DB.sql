CREATE DATABASE ROZETKA_TEST_DB
COLLATE Cyrillic_General_CI_AS
GO
CREATE TABLE CUSTOMERS
(
Id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
CustomerFName varchar(30) NOT NULL,
CustomerMName varchar(30) NOT NULL,
CustomerLName varchar(30) NOT NULL,
DateOfBirth date NOT NULL,
Phone char(10) NOT NULL
)
GO
CREATE TABLE ORDERS
(
Id int IDENTITY(1,1) NOT NULL,
Customer_Id int NOT NULL FOREIGN KEY REFERENCES CUSTOMERS(Id),
OrderNo char(20) NOT NULL,
OrderDate date NOT NULL,
OrderPrice money NOT NULL
)
GO

--//\///\//\/\/\/\////\/\/\/\/\\/\//\/spCustomerOrdersCOSTS
CREATE PROC spCustomerOrdersCOSTS
@Customer_id int,
@SumOfMoney MONEY 

AS
DECLARE @Money MONEY
DECLARE curS CURSOR FAST_FORWARD FOR 
	SELECT ORDERS.OrderPrice FROM ORDERS
	WHERE ORDERS.Customer_Id = @Customer_id

OPEN curS
 FETCH NEXT FROM curS 
		INTO @Money;

WHILE @@Fetch_Status = 0 
BEGIN
SET @SumOfMoney = @SumOfMoney + @Money;
FETCH NEXT FROM curS INTO @Money
END 
CLOSE curS
DEALLOCATE curS
SELECT @SumOfMoney AS costs



--//\///\//\/\/\/\////\/\/\/\/\\/\//\/spGetCustomerInfoById
CREATE PROC spGetCustomerInfoById
@Id int
AS
SELECT CUSTOMERS.Id, CUSTOMERS.CustomerFName, CUSTOMERS.CustomerMName, CUSTOMERS.CustomerLName, CUSTOMERS.DateOfBirth, CUSTOMERS.Phone

	FROM CUSTOMERS
	WHERE CUSTOMERS.Id = @Id

--//\///\//\/\/\/\////\/\/\/\/\\/\//\/spGetCustomerOrdersById
CREATE PROC spGetCustomerOrdersById
@Id int
AS
SELECT ORDERS.Id, ORDERS.OrderNo, ORDERS.OrderDate, ORDERS.OrderPrice

	FROM ORDERS
	WHERE ORDERS.Customer_Id = @Id
--//\///\//\/\/\/\////\/\/\/\/\\/\//\/spGetAllFullNames
CREATE PROC spGetAllFullNames
AS
SELECT CUSTOMERS.Id, CUSTOMERS.CustomerFName, CUSTOMERS.CustomerMName, 
CUSTOMERS.CustomerLName  FROM CUSTOMERS

--//\///\//\/\/\/\////\/\/\/\/\\/\//\/insert
--INSERT CUSTOMERS
--VALUES
----(N'Сидоров', N'Сидр', N'Сидорович', '1971-04-23', '0993231101'),
----('Иванов', 'Иван', 'Иванович', '1964-09-28', '0953237189'),
--('Петров', 'Петр', 'Петрович', '1981-04-03', '0913291601'),
--('Федотов', 'Федор', 'Федорович', '1989-01-20', '0733237801'),
--('Смирнов', 'Мирон', 'Миронович', '1958-12-06', '0683231101'),
--('Самсонов', 'Самсон', 'Самсонович', '1990-10-10', '0950011001')
--GO
--INSERT ORDERS
--VALUES
--(1, 001, '2018-04-23', 45),
--(1, 002, '2018-04-23', 48),
--(2, 003, '2018-04-28', 145),
--(3, 004, '2018-04-29', 48),
--(4, 005, '2018-05-13', 5),
--(5, 006, '2018-05-15', 408),
--(6, 007, '2018-06-28', 145),
--(6, 008, '2018-07-01', 1000),
--(1, 009, '2018-07-03', 45),
--(1, 010, '2018-07-03', 128.2),
--(2, 011, '2018-08-20', 1425),
--(2, 012, '2018-08-21', 145.6),
--(2, 013, '2018-09-28', 10.8),
--(3, 014, '2018-09-01', 48),
--(3, 015, '2018-09-01', 8),
--(3, 016, '2018-09-05', 2248.1),
--(3, 017, '2018-10-29', 418),
--(4, 018, '2018-10-13', 51),
--(4, 019, '2018-10-18', 5.1),
--(5, 020, '2018-11-11', 408),
--(5, 021, '2018-11-11', 41.6),
--(5, 022, '2018-11-16', 408),
--(5, 023, '2018-12-15', 409),
--(1, 024, '2018-12-15', 4),
--(1, 025, '2018-12-19', 28.2)
--SELECT * FROM CUSTOMERS