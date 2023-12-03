package com.DAO;

import java.sql.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.model.HotelEntity;
import com.model.TableBooking;
@Repository
public interface HotelRepository  extends JpaRepository<HotelEntity,Integer>{
	@Query("from HotelEntity h where h.emailId= :emailId and h.password = :password")
	HotelEntity loginByEmail(@Param("emailId")String emailId,@Param("password")String password );
	
	@Query("from HotelEntity h where h.emailId= :emailId")
	HotelEntity loginEmailCheck(@Param("emailId")String emailId);
	//@Query("into TableBooking values(id,name,emailId,date,person)")
	//TableBooking registerTableBooking(@Param("id")int id,@Param("name")String name,@Param("emailId")String emailId,@Param("date")Date date,@Param("person")int persons);
	
}