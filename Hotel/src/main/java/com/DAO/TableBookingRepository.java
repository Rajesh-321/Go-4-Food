package com.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.model.TableBooking;
@Repository
public interface TableBookingRepository extends JpaRepository<TableBooking,Integer> {
	

}
