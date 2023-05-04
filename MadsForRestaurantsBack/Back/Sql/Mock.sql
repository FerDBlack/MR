-- Insertar datos de prueba en la tabla de clientes
INSERT INTO tbclient (NAME, SECONDNAME, PHONE, EMAIL)
VALUES ('Juan', 'Pérez', '123456789', 'juan.perez@example.com'),
       ('María', 'García', '987654321', 'maria.garcia@example.com'),
       ('Pedro', 'López', '456789123', 'pedro.lopez@example.com');

-- Insertar datos de prueba en la tabla de mesas
INSERT INTO tbtable (NAME, Occupied, X, Y)
VALUES ('Table 1', true, 10, 20),
       ('Table 2', false, 200, 10),
       ('Table 3', true, 50, 20),
       ('Table 4', true, 250, -50),
       ('Table 5', false, 380, -350),
       ('Table 6', true, 450, -330);

-- Insertar datos de prueba en la tabla de reservas
INSERT INTO tbreservation (DATE, NUMCLIENTS, CLIENTID, TABLEID, NAME)
VALUES ('2023-04-20 12:00:00', 4, 1, 1, 'Juan Pérez'),
       ('2023-04-20 13:00:00', 2, 2, 2, 'María García'),
       ('2023-04-21 19:00:00', 6, 3, 3, 'Pedro López');

-- Insertar datos de prueba en la tabla de trabajadores
INSERT INTO tbworker (NAME, SECONDNAME, PHONE, EMAIL, PASSWORD, CHARGE)
VALUES ('Ana', 'Ruiz', '555555555', 'ana.ruiz@example.com', 'mypassword', 'S'),
       ('Pablo', 'González', '666666666', 'pablo.gonzalez@example.com', 'mypassword', 'C');