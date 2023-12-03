package com.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.model.TableOrderDetails;

@Repository
public interface TableOrderDetailsRepository  extends JpaRepository<TableOrderDetails,Integer>{
	


}
