package com.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.model.TableActive;

@Repository
public interface TableActiveRepository extends JpaRepository<TableActive,Integer>{

	/*@Query("from TableActive n where n.tableAllocated= :status")
	List<TableActive> getStatus(@Param("status")String status);*/
	
	@Query( "from TableActive n where n.date= :dates")
	List<TableActive> getDatesList(@Param("dates")String dates);
	
	/*@Query(" from TableActive n where n.tableNumber= :tablenumber and n.sno= :sno")
	List<TableActive> deleteCustomer(@Param("tablenumber")int tablenumber,@Param("sno")int sno);*/
	
	/*@Query("update TableActive n set n.tableAllocated= :status where n.tableNumber= :tablenumber ")
	void updateTableStatus(@Param("status") String status,@Param("tablenumber") int tablenumber);*/
	
	/*@Query("INSERT INTO TableActive (sno,tableNumber,tableAllocated,date) VALUES (:sno,:tablenumber, :tableallocated, :date)")
 
   void insertTableActive(@Param("sno") int sno,@Param("tablenumber")int tablenumber,@Param("tableallocated")String tableallocated,@Param("date")String date);*/	
}
