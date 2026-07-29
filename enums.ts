/**
 * enums.ts
 * Generic I2C Extension - Version 2
 */

//% blockNamespace="Generic I2C"
export enum I2CSpeed {
    //% block="100 kHz (Standard)"
    Standard100kHz = 100000,
    //% block="400 kHz (Fast)"
    Fast400kHz = 400000
}

//% blockNamespace="Generic I2C"
export enum I2CDataFormat {
    //% block="UInt8"
    UInt8 = 0,
    //% block="Int8"
    Int8 = 1,
    //% block="UInt16 Big Endian"
    UInt16BE = 2,
    //% block="UInt16 Little Endian"
    UInt16LE = 3,
    //% block="Int16 Big Endian"
    Int16BE = 4,
    //% block="Int16 Little Endian"
    Int16LE = 5,
    //% block="UInt32 Big Endian"
    UInt32BE = 6,
    //% block="UInt32 Little Endian"
    UInt32LE = 7
}

//% blockNamespace="Generic I2C"
export enum BitNumber {
    //% block="Bit 0"
    Bit0 = 0,
    //% block="Bit 1"
    Bit1 = 1,
    //% block="Bit 2"
    Bit2 = 2,
    //% block="Bit 3"
    Bit3 = 3,
    //% block="Bit 4"
    Bit4 = 4,
    //% block="Bit 5"
    Bit5 = 5,
    //% block="Bit 6"
    Bit6 = 6,
    //% block="Bit 7"
    Bit7 = 7
}
