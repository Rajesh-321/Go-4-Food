package com.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TableBooking {
	@Id
    private int tableNumber;
	
	private String name;
	
	private String eMail;
	
	private String bookingDate;
	
	private int persons;

	public TableBooking() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TableBooking(int tableNumber, String name, String eMail, String bookingDate, int persons) {
		super();
		this.tableNumber = tableNumber;
		this.name = name;
		this.eMail = eMail;
		this.bookingDate = bookingDate;
		this.persons = persons;
	}

	public int getTableNumber() {
		return tableNumber;
	}

	public void setTableNumber(int tableNumber) {
		this.tableNumber = tableNumber;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String geteMail() {
		return eMail;
	}

	public void seteMail(String eMail) {
		this.eMail = eMail;
	}

	public String getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}

	public int getPersons() {
		return persons;
	}

	public void setPersons(int persons) {
		this.persons = persons;
	}
	
    
}
