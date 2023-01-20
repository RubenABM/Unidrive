<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {
public function __construct() {
	parent::__construct();
	$this->load->model('AuthModel');
}
    public function index()
    {
        if($this->session->has_userdata('user'))
        {
            header("Location: ".base_url().$_SESSION['role']);
            exit();
        }

        $this->load->view('login');
    }

    public function login()
	{
		if($this->session->has_userdata('user'))
		{
			echo json_encode(
				array(
					"state"=> "redirect",
					"url"=> base_url().$_SESSION['role']
				));
			exit();
		}

		$number = isset($_POST['number']) ? $_POST['number'] : null;
		$password = isset($_POST['password']) ? $_POST['password'] : null;

		if(empty($number) || empty($password))
		{
			echo json_encode(array("state"=>"emptyFields"));
			return;
		}

        $this->AuthModel->login($number, $password);
    }

}
