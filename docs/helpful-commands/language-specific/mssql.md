## Create a datetime from string

```sql
SELECT name, createdDate
FROM table
WHERE createdDate > CAST('2024-11-27T01:27:00.000');
```

```sql
INSERT INTO table (name, createdDate)
VALUES ('name1', CAST('2024-11-27T01:27:00.000'));
```