/**
 * i2ccore.ts
 * Generic I2C Core - Version 2
 */

namespace GenericI2CCore {

    export function writeByte(address: number, value: number): void {
        pins.i2cWriteNumber(address, value, NumberFormat.UInt8BE)
    }

    export function readByte(address: number): number {
        return pins.i2cReadNumber(address, NumberFormat.UInt8BE)
    }

    export function writeRegister(address: number, reg: number, value: number): void {
        let b = pins.createBuffer(2)
        b[0] = reg
        b[1] = value
        pins.i2cWriteBuffer(address, b)
    }

    export function readRegister(address: number, reg: number): number {
        pins.i2cWriteNumber(address, reg, NumberFormat.UInt8BE, true)
        return pins.i2cReadNumber(address, NumberFormat.UInt8BE)
    }

    export function writeBuffer(address: number, buffer: Buffer): void {
        pins.i2cWriteBuffer(address, buffer)
    }

    export function readBuffer(address: number, length: number): Buffer {
        return pins.i2cReadBuffer(address, length)
    }

    export function writeRegisterBuffer(address: number, reg: number, buffer: Buffer): void {
        let out = pins.createBuffer(buffer.length + 1)
        out[0] = reg
        for (let i = 0; i < buffer.length; i++) out[i+1] = buffer[i]
        pins.i2cWriteBuffer(address, out)
    }

    export function readRegisterBuffer(address: number, reg: number, length: number): Buffer {
        pins.i2cWriteNumber(address, reg, NumberFormat.UInt8BE, true)
        return pins.i2cReadBuffer(address, length)
    }
}
