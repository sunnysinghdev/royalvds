<?php
class Configuration
{
    public static function GetKineticVersionLabel()
    {
        $ini_array = Helper::GetConfigIni();
        $versionLabel = $ini_array['Kinetic']['versionlabel'];
        return $versionLabel;
    }
    public static function GetECDLevel()
    {
        $ini_array = Helper::GetConfigIni();
        return $ini_array['PHP']['ecdlevel'];
    }
    public static function ECDRequestNoticesPath()
    {
        $ini_array = Helper::GetConfigIni();
        return $ini_array['PHP']['ecdrequestnotices'];
    }
    public static function decodergenericmodels()
    {
        $ini_array = Helper::GetConfigIni();
        return $ini_array['PHP']['decodergenericmodels'];
    }
    public static function SiteMaker()
    {
        $ini_array = Helper::GetConfigIni();
        $siteMaker = isset($ini_array['PHP']['sitemarker']) ? $ini_array['PHP']['sitemarker'] : "";
        return $siteMaker;
    }
    public static function SiteName()
    {
        $ini_array = Helper::GetConfigIni();
        $siteName = isset($ini_array['Kinetic']['sitename']) ? $ini_array['Kinetic']['sitename'] : "";
        return $siteName;
    }
    public static function GetConfigDataForKinetic($response)
    {
        $ini_array = Helper::GetConfigIni();
        $siteName = isset($ini_array['Kinetic']['sitename']) ? $ini_array['Kinetic']['sitename'] : "";
        $res = new stdClass();
        $res->versionLabel = Helper::GetVersion();
        $res->siteName = $siteName;
        return $response->getBody()->write($siteName . ' ' . Helper::GetVersion());
    }
}
