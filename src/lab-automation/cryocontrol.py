#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# launch program in the console interactively: python -i cryoconrol.py
# >>> cryocontrol()


import pyvisa
import sys
import time


rm = pyvisa.ResourceManager('@py')
# rm.list_resources()
# instrument ASRL5 is hard coded here
inst = rm.open_resource("ASRL5::INSTR")


inst_id = inst.query("*IDN?") # Cryo-con, 22C, <serial number>, <firmware revision>
inst_id = inst_id.split(",")
print("Connected to:", inst_id[0].strip(), inst_id[1].strip(), \
            "Serial no.", inst_id[2].strip())

print("Start controller: cryocontrol()")
print("Please run `disconnect()` before exiting python shell with `exit()`.")

if inst_id[0].strip() != "Cryo-con":
    print("Warning!!! ASRL5::INSTR is not a Cryocon device. Please provide correct instrument address in the code.")


def cryocontrol(offset=1.0, control_buffer=10.0):
    set_temp = get_set_temp()

    if set_temp > 350.0:
        print("Set temperature cannot be more than 350 K. Exiting...")
        return

    if set_temp < 0.0:
        print("Set temperature (K) cannot be negative. Exiting...")
        return

    if inst_id[0].strip() != "Cryo-con":
        print("Not connected to a Cryocon device. Please provide correct instrument address in the code. Exiting...")
        print("\nRun `disconnect()` before exiting python shell.")
        return

    try:
        while True:
            TK = get_temp()

            if TK < set_temp + offset:
                inst.query("CONTrol")
            elif TK > set_temp + control_buffer:
                inst.query("STOP")

            t = get_time()
            status = heater_status()
            sys.stdout.write("\r%s :: T = %.4f K :: Heating %s   Press Ctrl+C to stop" %(t, TK, status))

            time.sleep(1)
            sys.stdout.flush()
    except KeyboardInterrupt:
        print("\nController disengaged. You can run `cryocontrol()` again if needed or exit.")
        print("Please run `disconnect()` before exiting python shell with `exit()`.")


def get_set_temp():
    set_temp = float(input("Temperature (K) set point = "))
    return set_temp


def get_temp():
    return float(inst.query("INPut B:UNITs K;TEMPer?").strip())


def heater_status():
    return inst.query("CONTrol?").strip()


def disconnect():
    status = inst.query("CONTrol?").strip()
    if status != "OFF":
        inst.query("STOP")
    inst.close()
    print("Disconnected:", inst_id[0].strip(), inst_id[1].strip(), \
            "Serial no.", inst_id[2].strip())
    print("You may now safely exit python shell using: `exit()`")


def get_time():
    t = time.localtime()
    mon = t.tm_mon
    if mon < 10:
        mon = "0"+ str(mon)
    day = t.tm_mday
    if day < 10:
        day = "0"+ str(day)
    hour = t.tm_hour
    if hour < 10:
        hour = "0"+ str(hour)
    minute = t.tm_min
    if minute < 10:
        minute = "0"+ str(minute)
    sec = t.tm_sec
    if sec < 10:
        sec = "0"+ str(sec)
    return "{3}/{4}/{5} {0}:{1}:{2}".format(hour, minute, sec, day, mon, t.tm_year)
