<?php

class Helper
{

    public static function GetVersion()
    {
        return '$VERSION$';
    }

    public static function get_client_ip_based_filename($fileType)
    {
        $ipaddress = '';

        if (getenv('HTTP_CLIENT_IP'))
            $ipaddress = getenv('HTTP_CLIENT_IP', true);
        else if (getenv('HTTP_X_FORWARDED_FOR'))
            $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
        else if (getenv('HTTP_X_FORWARDED'))
            $ipaddress = getenv('HTTP_X_FORWARDED');
        else if (getenv('HTTP_FORWARDED_FOR'))
            $ipaddress = getenv('HTTP_FORWARDED_FOR');
        else if (getenv('HTTP_FORWARDED'))
            $ipaddress = getenv('HTTP_FORWARDED');
        else if (getenv('REMOTE_ADDR'))
            $ipaddress = getenv('REMOTE_ADDR');
        else
            $ipaddress = 'UNKNOWN';

        $ipaddress = str_replace(':', '', $ipaddress);
        $ipfilename = str_replace('.', '', $ipaddress);
        $time = date("Ymd_Hisu");

        $resultFilename = $ipfilename . "_" . $time . "_" . $fileType;

        return $resultFilename;
    }
    public static function genericModel()
    {
        $genericModels = [];
        $fileName = Configuration::decodergenericmodels();
        if (isset($fileName)) {
            $file_path = '../config/' . $fileName;
            $str = '{}';
            if (!file_exists($file_path)) {
                $file_path = '../../config/' . $fileName;
            }
            $str = @file_get_contents($file_path); //@ to supress warning
            if ($str === FALSE) {
                //File not found.
                $str = '{}';
            } else {
                $json_data = json_decode($str);
                if (isset($json_data) && isset($json_data->models)) {
                    foreach ($json_data->models as $gm) {
                        if (!empty($gm->prefix)) {
                            $genericModels[$gm->prefix] = trim($gm->description, " ");
                        }
                    }
                }
            }
        }
        return $genericModels;
    }
    public static function ConvertToCommaSeparatedQuotedValues($TokensWithSpace)
    {
        $token = strtok($TokensWithSpace, " ");
        $tokensIn = "";
        $tokenCount = 0;
        while ($token !== false) {
            $tokenCount = $tokenCount + 1;
            if ($tokenCount == 1) {
                $tokensIn = "'" . trim($token) . "'";
            } else {
                $tokensIn = $tokensIn . ", '" . trim($token) . "'";
            }
            $token = strtok(" ");
        }
        return $tokensIn;
    }

    public static function ConvertToArray($TokensWithSpace)
    {
        $token = strtok($TokensWithSpace, " ");
        $tokensIn = array();
        $tokenCount = 0;
        while ($token !== false) {
            $tokenCount = $tokenCount + 1;
            $value = trim($token);
            $tokensIn[] = $value;
            $token = strtok(" ");
        }
        return $tokensIn;
    }

    public static function PrepareIn($params)
    {
        $tokensIn = "";
        $count = 0;
        foreach ($params as $param) {
            $count = $count + 1;
            if ($count == 1)
                $tokensIn = "?";
            else
                $tokensIn = $tokensIn . ", ?";
        }
        return $tokensIn;
    }
    public static function file_get_contents($path)
    {
        return file_get_contents($path);
    }
    public static function getSystemFile($eagleNo)
    {
        $dir = dirname(__FILE__);
        $eagleNumber = str_pad($eagleNo, 6, "0", STR_PAD_LEFT);
        $path = $dir . "/../../" . $eagleNumber . "/" . $eagleNumber . ".html";
        if (file_exists($path)) {
            return "../" . $eagleNumber . "/" . $eagleNumber . ".html";
        }
        return null;
    }
    public static function getTempFolder()
    {
        $dir = __DIR__ . "/../../temp/";
        if (!is_writable(dirname($dir))) {
            //TestDevelopment temp is not writable
            //move up to production temp folder
            $dir = __DIR__ . "/../../../temp/";
        }
        return $dir;
    }
    public static function outputPath()
    {
        $dir = __DIR__ . "/../../";
        return $dir;
    }
    public static function getReportLink($eagle, $type)
    {
        $filePath = null;
        $link = null;
        $outputFolder = self::outputPath();
        $eagle = str_pad($eagle, 6, "0", STR_PAD_LEFT);

        if (empty($type) || !isset($type)) {
            $filePath = $outputFolder . "$eagle/$eagle.html";
            $link = "$eagle/$eagle.html";
        } else {
            $paddedEagle = str_pad($eagle, 8, "0", STR_PAD_LEFT);
            $filePath = $outputFolder . "$eagle/$paddedEagle" . "_$type.html";
            $link = "$eagle/$paddedEagle" . "_$type.html"; //e.g 022122/00022122_inf.html
        }
        return file_exists($filePath) ? $link : null;
    }
    public static function differenceInDays($startDate, $endDate)
    {
        $diff = strtotime($endDate) - strtotime($startDate);
        return abs(round($diff / 86400));
    }
    public static function GetConfigIni()
    {
        //$ini_array=null;
        $dir = dirname(__FILE__);
        $configFile = $dir . "/config.ini";
        if (file_exists($configFile))
            $ini_array = parse_ini_file($configFile, true);
        else {
            echo "Config file not found";
        }
        if ($ini_array == null)
            die("Config file not found!!" . $configFile);
        return $ini_array;
    }
    public static function convertCsvToJson($filePath, $withHeader)
    {
        $record = array();
        $file = fopen($filePath, "r");
        $headers = array();
        $headerParsed = false;
        while (!feof($file)) {
            if ($withHeader) {
                if (!$headerParsed) {
                    $headers = fgetcsv($file);
                    $headerParsed = true;
                }
                $dict = [];
                if (!feof($file)) {
                    $fields = fgetcsv($file);
                    //echo '\n'.$fields;
                    if ($fields !== false && count($fields) > 0) {
                        foreach ($fields as $key => $value) {
                            $dict[$headers[$key]] = utf8_encode($value); //$value;
                        }
                        $record[] = $dict;
                    }
                }
            } else {
                $fields = fgetcsv($file);
                if ($fields !== false) {
                    $record[] = $fields;
                }
            }
        }
        return $record;
    }
}
