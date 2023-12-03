package com.DAO;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.TableActive;

@Service
public class TableActiveDao {
	
	@Autowired
	TableActiveRepository tableActiveRepository;
	
	public void registerTableStatus(TableActive tableActive)
	{
		tableActiveRepository.save(tableActive);
	}
	
	public List<TableActive> getTableActiveDetails() {
		// TODO Auto-generated method stub
		return tableActiveRepository.findAll();
	}

	

	public List<TableActive> getDatesList(String status)
	{
		return tableActiveRepository.getDatesList(status);
	}
	
	public void updateTable(TableActive tableActive) {
		
		tableActiveRepository.save(tableActive);
		
	}

	public List<TableActive> getDates() {
		// TODO Auto-generated method stub
		return tableActiveRepository.findAll();
		
	}

	public void deleteCustomer(int sno) {
		// TODO Auto-generated method stub
		tableActiveRepository.deleteById(sno);
	}

	/*public void updateTableStatus(int tableNumber,String status) {
		// TODO Auto-generated method stub
		
		tableActiveRepository.updateTableStatus(status,tableNumber);
		
	}*/
	
	/*public void insertTableActive(int sno,int tableNumber,String tableAllocated,String date)
	{
		tableActiveRepository.insertTableActive(sno,tableNumber,tableAllocated,date);
	}*/
	
	

}
