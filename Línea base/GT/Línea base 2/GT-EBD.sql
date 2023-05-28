create database MacroSystem
use MacroSystem

create table Productos(
Id int primary key identity (1,1) not null,
Nombre varchar (40) not null,
VN_Carbohidratros int not null,
VN_Proteinas int not null,
VN_Grasas int not null,
VN_Calorias int not null,
Fecha datetime
);



create table Tickets(
Id int primary key identity (1,1) not null,
Categoria varchar (15) not null,
Fecha datetime
);


create table Usuario(
Id int primary key identity (1,1) not null,
Nombre varchar (15) not null,
Latitud float  not null,
Longitud float not null,
);

--Inserción datos a la tabla Productos:

insert into Productos (Nombre,VN_Carbohidratros,VN_Proteinas,VN_Grasas,VN_Calorias,Fecha) values ('Arroz con pollo en trozos','47','24','33','556','2023/05/07')

select * from Productos

SELECT @@SERVERNAME AS 'Nombre del Servidor'