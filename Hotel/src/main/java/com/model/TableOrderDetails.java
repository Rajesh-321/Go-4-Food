package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class TableOrderDetails {
	
	@Id@GeneratedValue
	private int sno;
	
	private int tableNumber;
	
	private String name;
	
	private String eMail;
	
	private String date;
	
	private int people;
	
	public TableOrderDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TableOrderDetails(int sno, int tableNumber, String name, String eMail, String date, int people) {
		super();
		this.sno = sno;
		this.tableNumber = tableNumber;
		this.name = name;
		this.eMail = eMail;
		this.date = date;
		this.people = people;
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

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getPeople() {
		return people;
	}

	public void setPeople(int people) {
		this.people = people;
	}
	
	
      
}
