<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class AdminModel extends CI_Model {
	public function __construct() {
		parent::__construct();
		$this->load->database();
	}

public function getStudents(){

  $student = $this->db->select('stu_id, stu_name, stu_num')->get('Student')->result();

  return $student;

}

}
