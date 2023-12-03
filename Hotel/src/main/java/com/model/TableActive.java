package com.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class TableActive {
	
	
	@Id@GeneratedValue
	private int sno;
	
	private int tableNumber;
	
	
	
	/* @Temporal(TemporalType.DATE)
    private Date date;*/
	private String date;
	
	public TableActive() {
		super();
		// TODO Auto-generated constructor stub
	}


	public TableActive(int sno,int tableNumber, String tableAllocated,String date) {
		super();
		this.sno=sno;
		this.tableNumber = tableNumber;
		
		this.date=date;
	}

	public int getSno() {
		return sno;
	}

	public void setSno(int sno) {
		this.sno = sno;
	}


	public int getTableNumber() {
		return tableNumber;
	}


	public void setTableNumber(int tableNumber) {
		this.tableNumber = tableNumber;
	}


	


	/*public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}*/
	
	public String getDate() {
	return date;
}


public void setDate(String date) {
	this.date = date;
}
	

	
	

}
