#  Oracle PL/SQL

## 제 8장

```plsql
SQL> set serveroutput on
SQL> begin
  2  dbms_output.enable;
  3  dbms_output.put_line('Hello PL/SQL');
  4  END;
  5  /
```

```plsql
SQL> declare
  2  i number;
  3  begin
  4  i := 200;
  5  dbms_output.put_line(i);
  6  end;
  7  /
```

