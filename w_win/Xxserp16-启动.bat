
@echo off

e:

cd E:/www/w_pro/w_pro_xxserp/pro_xxserp_t1/codes/v1/v1.0_xxserp16

call venv_dev/Scripts/activate

echo Starting Erp 16...

python xxserp-bin -c xxserp_dev.conf

pause