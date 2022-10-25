INSERT INTO departments (id, dept_name)
VALUES  (001, Sales),
        (002, Customer Care),
        (003, Accounting),
        (004, IT),
        (005, Human Resources);

INSERT INTO roles (id, job_title, salary, dept_id)
VALUES  (001, Lead Sales, 80000, 001),
        (002, Sales Rep, 70000, 001),
        (003, Representative, 70000, 002),
        (004, Accountant, 75000, 003),
        (005, Troubleshooter, 90000, 004),
        (006, Expert, 100000, 004),
        (007, Paper Pusher, 95000, 005);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES  (001, Dwight, Schrute, 001, 500),
        (002, Jim, Halpert, 002, 500),
        (003, Pam, Halpert, 003, 600),
        (004, Oscar, Martinez, 004, 700),
        (005, Angela, Martin, 004, 700),
        (006, Kevin, Malone, 004, 700),
        (007, Kelly, Kapoor, 003, 500),
        (008, Toby, Flenderson, 007, 900),
        (009, Shorts, Guy, 005, 800),
        (010, Nick, Glasses, 006, 800);