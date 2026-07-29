/**
 * generici2c.ts
 * Generic I2C Extension v2.0
 */
//% color="#3F51B5" weight=100 block="Generic I2C"
namespace GenericI2C {
    //% block="initialize I2C"
    export function initialize(): void { GenericI2CCore.initialize() }

    //% block="write byte $value to address $address"
    export function writeByte(address:number,value:number):void { GenericI2CCore.writeByte(address,value) }

    //% block="read byte from address $address"
    export function readByte(address:number):number { return GenericI2CCore.readByte(address) }

    //% block="write register $register value $value address $address"
    export function writeRegister(address:number,register:number,value:number):void { GenericI2CCore.writeRegister(address,register,value) }

    //% block="read register $register address $address"
    export function readRegister(address:number,register:number):number { return GenericI2CCore.readRegister(address,register) }

    //% block="write buffer $buffer address $address"
    export function writeBuffer(address:number,buffer:Buffer):void { GenericI2CCore.writeBuffer(address,buffer) }

    //% block="read $length bytes address $address"
    export function readBuffer(address:number,length:number):Buffer { return GenericI2CCore.readBuffer(address,length) }

    //% block="device present at $address"
    export function devicePresent(address:number):boolean { return GenericI2CScan.ping(address) }

    //% block="first I2C device"
    export function firstDevice():number { return GenericI2CScan.findFirst() }
}
