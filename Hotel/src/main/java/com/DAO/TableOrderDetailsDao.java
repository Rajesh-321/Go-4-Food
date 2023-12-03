package com.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.TableOrderDetails;

@Service
public class TableOrderDetailsDao {
	
	@Autowired
	TableOrderDetailsRepository tableOrderDetailsRepository;
	
	public List<TableOrderDetails> getTableOrderDetails() {
		return tableOrderDetailsRepository.findAll();
	}

	public void insertOrderDetails(TableOrderDetails tableOrderDetails) {
		
		tableOrderDetailsRepository.save(tableOrderDetails);
		
	}
	public void deleteCustomer(int sno) {
		// TODO Auto-generated method stub
		tableOrderDetailsRepository.deleteById(sno);
	}

}
