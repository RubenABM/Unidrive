-- PostgreSQL

CREATE TABLE authorizations (
  auth_id SERIAL NOT NULL,
  auth_startDate date NOT NULL,
  auth_endDate date NOT NULL,
  auth_user_id int NOT NULL,
  primary key(auth_id)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Category`
--

CREATE TABLE category (
  cat_id SERIAL NOT NULL,
  cat_name varchar(255) NOT NULL,
  primary key(cat_id)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `CategoryAuthorization`
--

CREATE TABLE categoryAuthorization (
  cat_auth_id SERIAL NOT NULL,
  cat_auth_cat_id int NOT NULL,
  cat_auth_auth_id int NOT NULL,
  primary key(cat_auth_id)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Content`
--

CREATE TABLE content (
  con_id SERIAL NOT NULL,
  con_user_id int NOT NULL,
  con_cat_id int NOT NULL,
  con_stu_pro_id int NOT NULL,
  con_name varchar(255) NOT NULL,
  con_url varchar(255) NOT NULL,
  con_type varchar(255) NOT NULL,
  con_year_id int NOT NULL,
  con_col_id int NOT NULL,
  primary key(con_id)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Course`
--

CREATE TABLE course (
  cour_id SERIAL NOT NULL,
  cour_name varchar(255) NOT NULL,
  primary key(cour_id)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Edition`
--

CREATE TABLE edition (
  edi_id SERIAL NOT NULL,
  edi_num varchar(255) NOT NULL,
  edi_con_id int NOT NULL,
   primary key(edi_id)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Project`
--

CREATE TABLE project (
  pro_id SERIAL NOT NULL,
  pro_date date NOT NULL,
  pro_name varchar(255) NOT NULL,
  pro_abstract varchar(1500) DEFAULT NULL,
  pro_biblioweb varchar(1500) DEFAULT NULL,
  pro_unitcour_id int NOT NULL,
  primary key(pro_id)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Role`
--

CREATE TABLE roles (
  role_id SERIAL NOT NULL,
  role_name varchar(50) NOT NULL,
  primary key (role_id)
);


-- --------------------------------------------------------

--
-- Estrutura da tabela `Student`
--

CREATE TABLE student (
  stu_id SERIAL NOT NULL,
  stu_name varchar(255) NOT NULL,
  stu_num varchar(8) NOT NULL,
  primary key(stu_id)
);


-- --------------------------------------------------------

--
-- Estrutura da tabela `StudentProject`
--

CREATE TABLE studentProject (
  stu_pro_id SERIAL NOT NULL,
  stu_pro_stu_id int NOT NULL,
  stu_pro_pro_id int NOT NULL,
  primary key(stu_pro_id)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Teacher`
--

CREATE TABLE teacher (
  tea_id SERIAL NOT NULL,
  tea_name varchar(255) NOT NULL,
  teacher_user_id int NOT NULL,
  primary key(tea_id)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Unit`
--

CREATE TABLE unit (
  unit_id SERIAL NOT NULL,
  unit_name varchar(255) NOT NULL,
  primary key(unit_id)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `UnitCourse`
--

CREATE TABLE unitCourse (
  unit_cour_id SERIAL NOT NULL,
  unit_cour_unit_id int NOT NULL,
  unit_cour_cour_id int NOT NULL,
  primary key(unit_cour_id)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `University`
--

CREATE TABLE university(
  uni_id SERIAL NOT NULL,
  uni_name varchar(255) NOT NULL,
  primary key(uni_id)
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `User`
--

CREATE TABLE users (
  user_id SERIAL NOT NULL,
  user_num varchar(8) NOT NULL,
  user_password varchar(255) NOT NULL,
  user_name varchar(255) NOT NULL,
  user_role_id int NOT NULL,
  user_cat_id int NOT NULL,
  primary key(user_id)
);

--
-- Extraindo dados da tabela `User`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `UserTemp`
--

CREATE TABLE userTemp (
  usert_id SERIAL NOT NULL,
  usert_user_id int NOT NULL,
  primary key(usert_id)
);

----------------------------------------------------------------

--
-- Estrutura da tabela 'College'
--

CREATE TABLE college (
  col_id SERIAL NOT NULL,
  col_name varchar(255) NOT NULL,
  col_uni_id int NOT NULL,
  primary key(col_id)
);

--
-- Estrutura da tabela 'Year'
--

CREATE TABLE year(
  year_id SERIAL NOT NULL,
  year_value varchar(255) NOT NULL,
  primary key(year_id)
);

--
-- Restrições para despejos de tabelas
--

ALTER TABLE users
ADD CONSTRAINT unique_user_num UNIQUE (user_num);

--
-- Limitadores para a tabela `Authorization`
--
ALTER TABLE authorizations
  ADD CONSTRAINT auth_user FOREIGN KEY (auth_user_id) REFERENCES users (user_id);

--
-- Limitadores para a tabela `CategoryAuthorization`
--
ALTER TABLE categoryAuthorization
  ADD CONSTRAINT cat_auth_auth FOREIGN KEY (cat_auth_auth_id) REFERENCES authorizations (auth_id),
  ADD CONSTRAINT cat_auth_cat FOREIGN KEY (cat_auth_cat_id) REFERENCES category (cat_id);

--
-- Limitadores para a tabela `Content`
--
ALTER TABLE content
  ADD CONSTRAINT con_cat FOREIGN KEY (con_cat_id) REFERENCES category (cat_id),
  ADD CONSTRAINT con_stu_pro FOREIGN KEY (con_stu_pro_id) REFERENCES studentproject (stu_pro_id),
  ADD CONSTRAINT con_user FOREIGN KEY (con_user_id) REFERENCES users (user_id);

--
-- Limitadores para a tabela `Edition`
--
ALTER TABLE edition
  ADD CONSTRAINT edi_con FOREIGN KEY (edi_con_id) REFERENCES content (con_id);

--
-- Limitadores para a tabela `Project`
--
ALTER TABLE project
  ADD CONSTRAINT pro_unitcour_id FOREIGN KEY (pro_unitcour_id) REFERENCES unitCourse (unit_cour_id);

--
-- Limitadores para a tabela `StudentProject`
--
ALTER TABLE studentProject
  ADD CONSTRAINT stu_pro_pro FOREIGN KEY (stu_pro_pro_id) REFERENCES project (pro_id),
  ADD CONSTRAINT stu_pro_stu FOREIGN KEY (stu_pro_stu_id) REFERENCES student (stu_id);

--
-- Limitadores para a tabela `College`
--
ALTER TABLE college
  ADD CONSTRAINT col_uni_id FOREIGN KEY (col_uni_id) REFERENCES university (uni_id);

--
-- Limitadores para a tabela `UnitCourse`
--
ALTER TABLE unitCourse
  ADD CONSTRAINT unit_cour_cour FOREIGN KEY (unit_cour_cour_id) REFERENCES course (cour_id),
  ADD CONSTRAINT unit_cour_unit FOREIGN KEY (unit_cour_unit_id) REFERENCES unit (unit_id);

--
-- Limitadores para a tabela `User`
--
ALTER TABLE users
  ADD CONSTRAINT user_role FOREIGN KEY (user_role_id) REFERENCES roles (role_id);
COMMIT;

-- Inserts

--
-- Extraindo dados da tabela `Role`
--

INSERT INTO roles (role_name) VALUES
('Professor'),
('Admin'),
('Investigador');

--
-- Extraindo dados da tabela `Student`
--


INSERT INTO users (user_num, user_password, user_name, user_role_id, user_cat_id) VALUES ('20200001', '$2b$10$rWDrGunz4Vpd1IJ7AzYCgeAUxCdSFd6P/CsCjlzUep042tB1iwUdS', 'Alice', 1, 1);
INSERT INTO users (user_num, user_password, user_name, user_role_id, user_cat_id) VALUES ('20200000', '$2b$10$hCnlRwez5Ej2QOdre33pN.M9vzqukZvREjqt426XQ7CTLRM63g7Bi', 'Admin', 2, 1);


insert into course (cour_name) values ('Não existe curso');
insert into course (cour_name) values ('Engenharia Informática');
insert into course (cour_name) values ('Design Global');
insert into course (cour_name) values ('Informática de Gestão');
insert into course (cour_name) values ('Fotografia');

insert into unit (unit_name) values ('Não existe UC'); 
insert into unit (unit_name) values ('Inteligencia Artificial'); 
insert into unit (unit_name) values ('Competencias Comunicacionais');
insert into unit (unit_name) values ('Matemática Discreta');
insert into unit (unit_name) values ('Programação orientada a objetos');
insert into unit (unit_name) values ('Projeto mobile');
insert into unit (unit_name) values ('Deontologia');

insert into student (stu_name, stu_num) values ('Não existe aluno', '00000000');
insert into student (stu_name, stu_num) values ('João Martins', 20200331); 
insert into student (stu_name, stu_num) values ('Rebeca Santos', 20200323); 
insert into student (stu_name, stu_num) values ('Tomas Costa', 20200326); 
insert into student (stu_name, stu_num) values ('Maria Pinto', 20200300);  

insert into category(cat_name) values ('Tudo');
insert into category(cat_name) values ('Design');
insert into category(cat_name) values ('História');
insert into category(cat_name) values ('Desenho');
insert into category(cat_name) values ('Powerpoint');
insert into category(cat_name) values ('Filosofia');
insert into category(cat_name) values ('Fotografia');

insert into unitcourse(unit_cour_unit_id, unit_cour_cour_id) values (1,1);
insert into unitcourse(unit_cour_unit_id, unit_cour_cour_id) values (3,4);
insert into unitcourse(unit_cour_unit_id, unit_cour_cour_id) values (6,2);
insert into unitcourse(unit_cour_unit_id, unit_cour_cour_id) values (7,2);
insert into unitcourse(unit_cour_unit_id, unit_cour_cour_id) values (3,3);
insert into unitcourse(unit_cour_unit_id, unit_cour_cour_id) values (7,5);


insert into project (pro_date, pro_name, pro_abstract, pro_biblioweb, pro_unitcour_id) values ('01-01-2022', 'Não existe projeto associado', '', '', 1);
insert into studentproject(stu_pro_stu_id, stu_pro_pro_id) values (1,1);

insert into year(year_value) values('2018/2019');
insert into year(year_value) values('2019/2020');
insert into year(year_value) values('2020/2021');
insert into year(year_value) values('2021/2022');
insert into year(year_value) values('2022/2023');

insert into university(uni_name) values('Universidade Europeia');
insert into university(uni_name) values('Universidade de Lisboa');
insert into university(uni_name) values('Universidade Nova');

insert into college(col_name, col_uni_id) values('IADE', 1);
insert into college(col_name, col_uni_id) values('IPAM', 1);
insert into college(col_name, col_uni_id) values('Faculdade de letras', 2);
insert into college(col_name, col_uni_id) values('Faculdade de ciências', 2);
insert into college(col_name, col_uni_id) values('Faculdade SBE', 3);
insert into college(col_name, col_uni_id) values('Faculdade NMS', 3);