package com.DAO;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.TableBooking;

@Service
public class TableBookingDao {
 
	
	@Autowired
	TableBookingRepository tableBookingRepository;
	
	public void registerTableBooking(TableBooking tableBooking)
	{
		tableBookingRepository.save(tableBooking);
	}

	public List<TableBooking> getBookingDetails() {
		// TODO Auto-generated method stub
		return tableBookingRepository.findAll();
	}

	
}
