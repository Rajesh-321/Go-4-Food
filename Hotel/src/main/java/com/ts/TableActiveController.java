package com.ts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DAO.TableActiveDao;
import com.model.TableActive;

@RestController
public class TableActiveController {

	@Autowired
	TableActiveDao tableActiveDao;
	
	@PostMapping("registerTableActive")
	public String registerTableStatus(@RequestBody TableActive tableActive)
	{
		tableActiveDao.registerTableStatus(tableActive);
		return "succefullly table booked";
	}
	
	
	@GetMapping("getAllActiveDetails")
	public List<TableActive> getBookingDetails()
	{
		return tableActiveDao.getTableActiveDetails();
	}
	
	
	
	@GetMapping("getAllDates/{date}")
	public List<TableActive> getDatesList(@PathVariable("date")String date)
	{
		return tableActiveDao.getDatesList(date);
	}
	
	/*@PutMapping("updateTableActive/{tablenumber},{status}")
	public String updateTable(@PathVariable("tablenumber")int tablenumber,@PathVariable("status")String status) {		
		tableActiveDao.updateTableStatus(tablenumber,status);
	    return "Product Updated Successfully";
	}*/
	
	@PutMapping("updateTableActive")
	public String updateTable(@RequestBody TableActive tableActive)
	{
		tableActiveDao.updateTable(tableActive);
		return "Updated Succesfully";
	}
	
	@GetMapping("getAllDates")
	public List<TableActive> getDates()
	{
		return tableActiveDao.getDates();
	}
	
	@DeleteMapping("deleteCustomer/{sno}")
	public String deleteCustomer(@PathVariable("sno")int sno )
	{
		tableActiveDao.deleteCustomer(sno);
		return "Delete succesfully";
	}
	/*@PostMapping("insertActiveTable/{sno},{tablenumber},{tableAllocated},{date}")
	public String insertTableActive(@PathVariable("sno")int sno,@PathVariable("tablenumber")int tablenumber,@PathVariable("tableAllocated")String tableAllocated,@PathVariable("date")String date )
	{
		tableActiveDao.insertTableActive(sno , tablenumber, tableAllocated, date);
		return "inserted Scuceefully";
		
	}*/
	
}
