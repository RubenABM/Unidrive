<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Fileupload extends CI_Controller {
    public function __construct() {
        parent::__construct();
        $this->load->model('AdminModel');
    }
    public function index()
    {

        $students = $this->AdminModel->getStudents();

        $array = array(
          'students'=>$students
        );

        $this->load->view('fileupload', $array);

    }

    public function getStudents(){
      $results = $this->AdminModel->getStudents();

      if($results != null){
        echo json_encode(array("state"=>"success", "item"=>$results));
      }
    }
}
