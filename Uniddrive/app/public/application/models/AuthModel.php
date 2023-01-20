<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class AuthModel extends CI_Model {
	public function __construct() {
		parent::__construct();
		$this->load->database();
	}

public function login($number, $password){
    
    $user = $this->db->select('user_id, user_num, user_password, user_name, role_name')->where('user_num', $number)->join('Role', 'role_id = user_role')->get('User');

    if($user->num_rows() == 0)
    {
      echo json_encode(array("state"=>"error"));
      return;
    }
    $user = $user->row_array();

    if(password_verify($password, $user['user_password']))
    {
        $this->session->set_userdata('user', $number);
        $this->session->set_userdata('name', $user['user_name']);
        $this->session->set_userdata('role', $user['role_name']);

        echo json_encode(
            array(
                "state"=>"success",
                "url"=>base_url().$user['role_name']
            ));
        return true;
    }

    echo json_encode(array("state"=>"error"));
  }
}
