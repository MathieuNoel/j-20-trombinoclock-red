- toutes les promos, dans l'ordre alphabétique
SELECT name FROM promo ORDER BY name ASC;

- tous les étudiants, dans l'ordre alphabétique des noms de famille
SELECT first_name, last_name FROM student ORDER BY last_name ASC;

- tous les étudiants de la promo 135
SELECT * FROM student WHERE promo_id = 135 ;

- les étudiants dont le nom ou le prénom ressemble à "max"
SELECT * FROM student WHERE first_name LIKE '%Max%' OR last_name LIKE'%Max%';