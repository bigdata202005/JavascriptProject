# PL/SQL 함수

```plsql
-- 출력을 해라
set serveroutput on;

-- 나머지를 구해주는 함수 작성
CREATE OR REPLACE FUNCTION my_mod ( num1 NUMBER, num2 NUMBER )
   RETURN NUMBER  -- 반환 데이터타입은 NUMBER
IS
   vn_remainder NUMBER := 0; -- 반환할 나머지
   vn_quotient  NUMBER := 0; -- 몫 
BEGIN
	 vn_quotient  := FLOOR(num1 / num2); -- 피제수/제수 결과에서 정수 부분을 걸러낸다
	 vn_remainder := num1 - ( num2 * vn_quotient); --나머지 = 피제수 - ( 제수 * 몫)
	 RETURN vn_remainder;  -- 나머지를 반환
END;	
-- 함수 실행
SELECT my_mod(14, 3) reminder  FROM DUAL; 

-- 나머지를 구해주는 함수 작성
CREATE OR REPLACE FUNCTION my_mod2 ( num1 NUMBER, num2 NUMBER )
   RETURN NUMBER  -- 반환 데이터타입은 NUMBER
IS
  m number:=0;
BEGIN
   m := mod(num1,num2);
	 RETURN m;  -- 나머지를 반환
END;
-- 함수 실행
SELECT my_mod2(14, 3) reminder  FROM DUAL; 
```

```plsql
-- 인수가 없는 함수 만들기
CREATE OR REPLACE FUNCTION today -- 괄호가 없다
  return varchar2
is
  date_str varchar2(100);
begin
  select sysdate into date_str from dual; -- select결과를 변수에 대입하려면 into사용
  return date_str;
end;
-- 인수가 없는 홤수 실행
select today() from dual;
```

```plsql
-- 국가아이디를 입력받아 국가이름을 리턴하는 함수를 만들어보자
select * from countries;
CREATE OR REPLACE FUNCTION Get_Country_Name(coun_id varchar2)
  return varchar2
is
  str countries.country_name%TYPE;
begin
  select country_name into str from countries where country_id=coun_id;
  return str;
end;

select Get_Country_Name('AR') from dual;
```

```plsql
-- 국가id가 없으면 '없음'으로 출력하라!!!
CREATE OR REPLACE FUNCTION Get_Country_Name2(coun_id varchar2)
  return varchar2
is
  str countries.country_name%TYPE;
  cnt number :=0;
begin
  select count(*) into cnt from countries where country_id=coun_id;
  if cnt=0 then
    str := '없음';
  else
    select country_name into str from countries where country_id=coun_id;
  end if;
  return str;
end;

select Get_Country_Name2('AR') from dual;
select Get_Country_Name2('ARA') from dual;

```

```plsql
-- function은 리턴값이 있는것이고
-- procedure는 리턴값이 없는것이다.

-- 임시 테이블 만들어서 해보자
create table myJobs as select * from jobs;
select * from myJobs;
-- myJobs테이블에 테이터를 추가하는 프로시져를만들어 보자
CREATE OR REPLACE PROCEDURE my_new_job_proc 
          ( p_job_id    IN myJobs.JOB_ID%TYPE, p_job_title IN myJobs.JOB_TITLE%TYPE,
            p_min_sal   IN myJobs.MIN_SALARY%TYPE, p_max_sal   IN myJobs.MAX_SALARY%TYPE )
IS
BEGIN
	INSERT INTO myJobs 
    ( job_id, job_title, min_salary, max_salary)
	  VALUES 
    ( p_job_id, p_job_title, p_min_sal, p_max_sal);
	COMMIT;
END ;            
-- 프로시저 실행
EXEC my_new_job_proc ('SM_JOB1', 'Sample JOB1', 1000, 5000);

```

```plsql
-- 동일한 job_id가 존재하면 수정하고 없으면 입력하는 프로시져 작성
CREATE OR REPLACE PROCEDURE my_new_job_proc 
          ( p_job_id    IN myJobs.JOB_ID%TYPE, p_job_title IN myJobs.JOB_TITLE%TYPE,
            p_min_sal   IN myJobs.MIN_SALARY%TYPE, p_max_sal   IN myJobs.MAX_SALARY%TYPE )
IS
  cnt number := 0;
BEGIN
  select count(*) into cnt from myjobs where job_id=p_job_id; -- 같은 아이디 개수 얻기
  if cnt = 0 then 
      INSERT INTO myJobs 
        ( job_id, job_title, min_salary, max_salary)
        VALUES 
        ( p_job_id, p_job_title, p_min_sal, p_max_sal);
  else
      update myjobs set
        job_title = p_job_title, min_salary = p_min_sal, max_salary=p_max_sal
      where
        job_id = p_job_id;
  end if;
      COMMIT;
END ;    

EXEC my_new_job_proc ('SM_JOB1', 'Sample JOB1', 1000, 5000);
select * from myjobs;
```

```plsql
-- 아래처럼 실행하면 에러이다. 매개변수가 4개인데 두개만 지정했기 때문이다.
EXEC my_new_job_proc ('SM_JOB1', 'Sample JOB1');


--매개변수에 기본값을 주면 위의 에러를 방지할 수 있다.
CREATE OR REPLACE PROCEDURE my_new_job_proc 
          ( 
            p_job_id    IN myJobs.JOB_ID%TYPE, 
            p_job_title IN myJobs.JOB_TITLE%TYPE,
            p_min_sal   IN myJobs.MIN_SALARY%TYPE := 100,  -- 기본값 지정
            p_max_sal   IN myJobs.MAX_SALARY%TYPE := 1000 
            )
IS
  cnt number := 0;
BEGIN
  select count(*) into cnt from myjobs where job_id=p_job_id; -- 같은 아이디 개수 얻기
  if cnt = 0 then 
      INSERT INTO myJobs 
        ( job_id, job_title, min_salary, max_salary)
        VALUES 
        ( p_job_id, p_job_title, p_min_sal, p_max_sal);
  else
      update myjobs set
        job_title = p_job_title, min_salary = p_min_sal, max_salary=p_max_sal
      where
        job_id = p_job_id;
  end if;
      COMMIT;
END ;    

EXEC my_new_job_proc ('SM_JOB1', 'Sample JOB1');
select * from myjobs where job_id= 'SM_JOB1';
```

```plsql
-- 프로시져에서 값을 리턴하는 방법 : out 매개 변수 사용해 보자!!!!
CREATE OR REPLACE PROCEDURE my_new_job_proc3 
          ( 
            p_job_id    IN myJobs.JOB_ID%TYPE, 
            p_job_title IN myJobs.JOB_TITLE%TYPE,
            p_min_sal   IN myJobs.MIN_SALARY%TYPE,
            p_max_sal   IN myJobs.MAX_SALARY%TYPE,
            now out varchar2
            )
IS
  cnt number := 0;
  today varchar2(100);
BEGIN
  select sysdate into today from dual;
  select count(*) into cnt from myjobs where job_id=p_job_id; -- 같은 아이디 개수 얻기
  if cnt = 0 then 
      INSERT INTO myJobs 
        ( job_id, job_title, min_salary, max_salary)
        VALUES 
        ( p_job_id, p_job_title, p_min_sal, p_max_sal);
  else
      update myjobs set
        job_title = p_job_title, min_salary = p_min_sal, max_salary=p_max_sal
      where
        job_id = p_job_id;
  end if;
  now := today; -- out변수에 값 할당!!!!
  COMMIT;
END;    

-- 위의 프로시져를 실행해 보자
declare
  now varchar2(100);
begin
  my_new_job_proc3 ('SM_JOB1', 'Sample JOB1', 100,10000, now);
  dbms_output.PUT_LINE(now);
end;  
```

```plsql
-- 프로시져 실행시 돌려받을 값의 변수를 넘겨주는데 out일 경우에는 값이 전달되지 않는다.
CREATE OR REPLACE PROCEDURE my_parameter_test_proc (
               p_var1        VARCHAR2,
               p_var2 OUT    VARCHAR2,
               p_var3 IN OUT VARCHAR2 )
IS
BEGIN
	 DBMS_OUTPUT.PUT_LINE('p_var1 value = ' || p_var1);
	 DBMS_OUTPUT.PUT_LINE('p_var2 value = ' || p_var2); -- 값이 출력되지 않는다. 출력전용!!!
	 DBMS_OUTPUT.PUT_LINE('p_var3 value = ' || p_var3);
	 p_var2 := 'B2';
	 p_var3 := 'C2';
END;               

DECLARE 
   v_var1 VARCHAR2(10) := 'A';
   v_var2 VARCHAR2(10) := 'B';
   v_var3 VARCHAR2(10) := 'C';
BEGIN
	 my_parameter_test_proc (v_var1, v_var2, v_var3);
	 
	 DBMS_OUTPUT.PUT_LINE('v_var2 value = ' || v_var2);
	 DBMS_OUTPUT.PUT_LINE('v_var3 value = ' || v_var3);
END;

```

