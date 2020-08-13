-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT
 Product.ProductName, 
 Category.CategoryName 
 from product
 join Category on Product.CategoryId = Category.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT 
    DISTINCT OrderDetail.OrderId,
    Shipper.CompanyName
FROM
    [Order]
JOIN
    OrderDetail
    on
    OrderDetail.OrderId = [Order].Id
JOIN
    Shipper
    on 
    Shipper.Id = [Order].ShipVia
WHERE
    [Order].OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT
    OrderDetail.Quantity,
    Product.ProductName
FROM 
    OrderDetail
JOIN
    Product
    on
    OrderDetail.ProductId = Product.Id
WHERE
    OrderDetail.OrderId = '10251'

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT
    [Order].Id as OrderID,
    Customer.CompanyName,
    Employee.LastName
FROM
    [Order]
JOIN
    Customer
    on
    [Order].CustomerId = Customer.Id
Join
    Employee
    on
    [Order].EmployeeId = Employee.Id