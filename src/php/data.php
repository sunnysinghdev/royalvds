<?php
class Data {

    private $fileName;
    private $dataObject;
    public function __construct()
    {
        $this->fileName = 'config/data.json';
        $this->dataObject = (object)json_decode(file_get_contents($this->fileName));
    }
    
    public function getVistorsCount(){
        return $this->dataObject->vistors;
    }
    public function incrementVistorsCount(){
        $this->dataObject->vistors++;
        $this->saveData();
    }
    public function getUniqueVistorsCount(){
        return $this->dataObject->uniqueVistors;
    }
    public function incrementUniqueVistorsCount(){
        $this->dataObject->uniqueVistors++;
        $this->saveData();
    }
    private function saveData()
    {
        file_put_contents($this->fileName, json_encode($this->dataObject));
    }
    public function getData()
    {
        return $this->dataObject;
    }
}
