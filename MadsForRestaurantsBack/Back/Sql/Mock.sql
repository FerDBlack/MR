INSERT INTO TbClient (name, secondName, phone, email)
VALUES
       ('Juan', 'Pérez', '123456789', 'juan.perez@example.com'),
       ('María', 'García', '987654321', 'maria.garcia@example.com'),
       ('Pedro', 'López', '456789123', 'pedro.lopez@example.com'),
       ('Ana', 'Martínez', '789123456', 'ana.martinez@example.com'),
       ('Luis', 'Rodríguez', '321654987', 'luis.rodriguez@example.com');

INSERT INTO TbTable (name, x, y)
VALUES
       ('Table 1', 0, 100),
       ('Table 2', 200, 150),
       ('Table 3', 400, -200),
       ('Table 4', 600, -155),
       ('Table 5', 750, -500);

INSERT INTO TbReservation (date, numClients, clientId, tableId, name)
VALUES
       ('2023-06-01', 4, 1, 1, 'Juan Pérez'),
       ('2023-06-01', 2, 2, 3, 'María García'),
       ('2023-06-01', 3, 3, 2, 'Pedro López'),
       ('2023-06-01', 5, 4, 5, 'Ana Martínez'),
       ('2023-06-01', 2, 5, 4, 'Luis Rodríguez');

