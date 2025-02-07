---
{"dg-publish":true,"permalink":"/fleeting-notes/database-session-1/"}
---

# Database

- *record* (table)- colllection of one or more feild value/attribute/data
- File - collection of one or more *records* (table)
- Feild (cells)- lowest level of data item of a record 
	- data -> record -> file -> database

## Advantages of Database  System

- what are the Advantages of Database  System?
	1. **Redundancy Reduction**  
	   - Eliminates duplicate data using **Normalization**.  
	   - Saves disk space and prevents **inconsistency**.  
	
	2. **Avoids Inconsistency**  
	   - Ensures data remains consistent across applications.  
	   - Uses **"Propagating updates"** to synchronize multiple copies.  
	
	1. **Data Sharing**  
	   - Supports concurrent access by multiple applications.  
	   - **Distributed databases** maintain mirror copies of data (e.g., railway reservations).  
	
	2. **Data Integration**  
	   - Combines data from multiple tables to answer complex queries.  
	   - Example: Linking **Student** and **Staff** tables to retrieve results.  
	
	3. **Security Mechanism**  
	   - Protects data using:  
	     a) **Software Controls** – Authentication (login/password), Encryption.  
	     b) **Hardware Controls** – Access cards for restricted areas.  
	
	4. **Integrity Maintenance**  
	   - Prevents invalid data entry using **integrity constraints**.  
	   - Example: Ensuring **HOURS_WORKED** field accepts values between **0 to 24**.  
	
	5. **Balancing Conflicting Requirements**  
	   - Database Administrator (DBA) optimizes storage structures and access methods for efficiency.  
	
	6. **Data Independence**  
	   - **Logical Data Independence** – Changing application code without modifying storage.  
	   - **Physical Data Independence** – Changing storage structure without modifying application code.  
