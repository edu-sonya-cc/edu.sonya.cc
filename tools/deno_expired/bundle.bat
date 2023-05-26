@ECHO OFF

set timestamp=%date:~0,4%%date:~5,2%%date:~8,2%_%time:~0,2%%time:~3,2%%time:~6,2%
set timestamp=%timestamp: =0%
set log=log\bundle\bundle_%timestamp%.txt

SET currentPath=%cd%
call bundle_0_0_1_1_const.bat
call bundle_0_0_1_2_dom.bat
call bundle_0_0_1_3_storage.bat
call bundle_0_0_1_4_utils.bat
call bundle_0_0_1_5_global.bat
call bundle_0_0_1_6_pcGlobal.bat
call bundle_0_0_1_7_actualPageBase.bat
call bundle_0_0_10_boxBase.bat
call bundle_0_0_11_diceBase.bat
call bundle_0_0_2_DPIHelper.bat
call bundle_0_0_3_svgHelper.bat
call bundle_0_0_4_dice.bat
call bundle_0_0_5_box.bat
call bundle_0_0_6_brickBase.bat
call bundle_0_0_7_brickWithTableBase.bat
call bundle_0_0_8_pokerBase.bat
call bundle_0_0_9_copybookBase.bat
call bundle_0_0_main.bat && CD %currentPath%

call bundle_0_1_home.bat
call bundle_0_2_bricks.bat
call bundle_0_3_brick.bat
call bundle_0_4_treasures.bat
call bundle_0_5_stories.bat
call bundle_0_6_story.bat
call bundle_0_7_about.bat
call bundle_0_8_report.bat

call bundle_0_101_data.bat

call bundle_1_brick_1.bat
call bundle_1_brick_2.bat
call bundle_1_brick_3.bat
call bundle_1_brick_4.bat
call bundle_1_brick_5.bat
call bundle_1_brick_6.bat
call bundle_1_brick_7.bat
call bundle_1_brick_8.bat
call bundle_1_brick_9.bat
call bundle_1_brick_10.bat
call bundle_1_brick_11.bat
call bundle_1_brick_12.bat