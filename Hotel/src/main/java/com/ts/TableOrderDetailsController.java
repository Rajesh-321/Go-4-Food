package com.ts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DAO.TableOrderDetailsDao;
import com.model.TableOrderDetails;

@RestController
public class TableOrderDetailsController {
	
	@Autowired
	TableOrderDetailsDao tableOrderDetailsDao;
	
	@GetMapping("getOrderedDetails")
	public List<TableOrderDetails> getOrderDetails()
	{
		return tableOrderDetailsDao.getTableOrderDetails();
	}
   
	@PostMapping("registerOrder")
	public String insertOrderDetails(@RequestBody TableOrderDetails tableOrderDetails)
	{
		tableOrderDetailsDao.insertOrderDetails(tableOrderDetails);
		return "Registered order Succefully";
	}
	
	@DeleteMapping("deleteBookingCustomer/{sno}")
	public void deleteCustomer(@PathVariable("sno")int sno)
	{
		tableOrderDetailsDao.deleteCustomer(sno);
	}
}
