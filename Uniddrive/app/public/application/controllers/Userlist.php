<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Userlist extends CI_Controller {
    public function __construct() {
        parent::__construct();
        //$this->load->model('DashboardModel');
    }
    public function index()
    {
        $this->load->view('userlist');
    }
}