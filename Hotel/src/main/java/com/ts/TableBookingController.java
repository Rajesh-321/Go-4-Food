package com.ts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DAO.HotelDao;
import com.DAO.TableBookingDao;
import com.model.TableBooking;
@RestController
public class TableBookingController{
	
	
	@Autowired
	HotelDao hotelDao; 
	
	@Autowired
	TableBookingDao tableBookingDao;
	
	@PostMapping("registerTableBooking")
	public String registerTableBooking(@RequestBody TableBooking tableBooking)
	{
		tableBookingDao.registerTableBooking(tableBooking);
		return "succefullly tanle booked";
	}
	@GetMapping("getAllBookingDetails")
	public List<TableBooking> getBookingDetails()
	{
		return tableBookingDao.getBookingDetails();
	}
	
	
}
