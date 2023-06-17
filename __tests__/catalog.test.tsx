import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SecurityItemType } from '@/pages/catalog';
import { ProductType } from '@/redux/reducers/static';
import * as redux from 'react-redux';
import Products from '@/pages/catalog/catalogComponents/products';

const fakeProducts: ProductType[] = [
  {
    "finishing": "Solid",
    "where": "house",
    "reviews": [
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "grade": 5,
        "city": "Moscow",
        "advantages": "Lorem ipsum dolor sit amet.",
        "date": "April 17, 2021"
      },
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 3,
        "date": "April 17, 2021",
        "city": "Moscow"
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 1,
        "date": "April 17, 2021"
      },
      {
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021",
        "grade": 3,
        "city": "Moscow",
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021",
        "grade": 2,
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "city": "Moscow"
      },
      {
        "grade": 3,
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet.",
        "city": "Moscow",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?"
      },
      {
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "grade": 5,
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "city": "Moscow",
        "grade": 5,
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "date": "April 17, 2021"
      },
      {
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "date": "April 17, 2021",
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 5
      },
      {
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 1,
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "date": "April 17, 2021"
      }
    ],
    "discount": {
      "expiryDate": "2030-02-15T19:00:00.000Z",
      "value": 10
    },
    "price": 69000,
    "img": "https://i.postimg.cc/wTc75YgT/img.png",
    "name": "Expert pro tp1",
    "security": "Tamperproof",
    "characteristics": {
      "decorativeTrim": {
        "coatingColor": "white",
        "finishingFromTheInside": false,
        "coatingOfCanvasAndBox": "grey",
        "finishingOutside": true,
        "decorativeThreshold": true
      },
      "protectionAgainstBreaking": {
        "armorPackage": false,
        "lockClass": "2",
        "lockBrand": "locka",
        "numberOfLocks": "2",
        "nightValve": true,
        "numberOfMetalSheets": "5",
        "numberOfStiffeners": "8",
        "armorPlate": false,
        "numberOfAntiRemovableClips": "4",
        "metalThickness": "6"
      },
      "general": {
        "productName": "surona 4",
        "openingDirection": "right",
        "manufacturer": "ninagoe",
        "leafThickness": "54 mm",
        "frameType": "type 5",
        "weight": "150 kg",
        "width": "0.9 m",
        "height": "2 m",
        "openingSide": "left",
        "soundInsulationIndex": "1"
      },
      "easeOfUse": {
        "viewingAngleOfThePeephole": "180",
        "numberOfDoorHinges": "5",
        "doorHingeType": "Comfort +",
        "latchAdjuster": "Metal",
        "closer": true,
        "functionalValve": false,
        "removableCornersToReplaceTheInnerPanel": "2",
        "peepholeHeight": "50 mm",
        "openingAngle": "90",
        "electronicLockWithFingerprintScanner": true,
        "castleOfInvisibility": false
      },
      "heatAndSoundInsulation": {
        "doorLeafFiller": "Plywood",
        "fillerLayerThickness": "25 mm",
        "applicationTemperatureOfTheFiller": "90",
        "doorFrameInsulation": false,
        "flammabilityClassOfTheFiller": "6"
      },
      "tightness": {
        "numberOfSealCircuits": "3",
        "sealMaterial": "Plywood"
      },
      "accessories": {
        "pen": "black",
        "hardwareColor": "grey",
        "hingeDecor": false,
        "closer": true,
        "threshold": true
      }
    },
    "color": "Wenge",
    "id": 8,
    "material": "Scandinavian oak"
  },
  {
    "security": "Armored",
    "where": "apartment",
    "id": 1,
    "reviews": [
      {
        "grade": 5,
        "advantages": "Lorem ipsum dolor sit amet.",
        "city": "Moscow",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?"
      },
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet.",
        "grade": 3,
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?"
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 1,
        "advantages": "Lorem ipsum dolor sit amet.",
        "userName": "Petrov Mikhail Vladimirovich",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "date": "April 17, 2021",
        "city": "Moscow"
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 3,
        "date": "April 17, 2021",
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "advantages": "Lorem ipsum dolor sit amet.",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 2,
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "userName": "Petrov Mikhail Vladimirovich"
      },
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "city": "Moscow",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 3
      },
      {
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 5,
        "date": "April 17, 2021",
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow",
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet.",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 5,
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "userName": "Petrov Mikhail Vladimirovich"
      },
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "city": "Moscow",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 5,
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "date": "April 17, 2021",
        "grade": 1,
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow"
      }
    ],
    "material": "Scandinavian oak",
    "img": "https://i.postimg.cc/8PV7rz80/img-1.png",
    "price": 55000,
    "finishing": "Forged",
    "name": "Expert pro arm1",
    "color": "White",
    "characteristics": {
      "protectionAgainstBreaking": {
        "numberOfMetalSheets": "5",
        "numberOfAntiRemovableClips": "4",
        "lockClass": "2",
        "nightValve": true,
        "armorPackage": false,
        "metalThickness": "6",
        "numberOfStiffeners": "8",
        "armorPlate": false,
        "lockBrand": "locka",
        "numberOfLocks": "2"
      },
      "easeOfUse": {
        "closer": true,
        "viewingAngleOfThePeephole": "180",
        "electronicLockWithFingerprintScanner": true,
        "openingAngle": "90",
        "doorHingeType": "Comfort +",
        "latchAdjuster": "Metal",
        "castleOfInvisibility": false,
        "removableCornersToReplaceTheInnerPanel": "2",
        "numberOfDoorHinges": "5",
        "functionalValve": false,
        "peepholeHeight": "50 mm"
      },
      "decorativeTrim": {
        "coatingOfCanvasAndBox": "grey",
        "finishingFromTheInside": false,
        "finishingOutside": true,
        "decorativeThreshold": true,
        "coatingColor": "white"
      },
      "heatAndSoundInsulation": {
        "fillerLayerThickness": "25 mm",
        "applicationTemperatureOfTheFiller": "90",
        "doorLeafFiller": "Plywood",
        "doorFrameInsulation": false,
        "flammabilityClassOfTheFiller": "6"
      },
      "tightness": {
        "sealMaterial": "Plywood",
        "numberOfSealCircuits": "3"
      },
      "general": {
        "weight": "150 kg",
        "openingSide": "left",
        "manufacturer": "ninagoe",
        "soundInsulationIndex": "1",
        "openingDirection": "right",
        "height": "2 m",
        "frameType": "type 5",
        "leafThickness": "54 mm",
        "width": "0.9 m",
        "productName": "surona 4"
      },
      "accessories": {
        "closer": true,
        "hardwareColor": "grey",
        "hingeDecor": false,
        "pen": "black",
        "threshold": true
      }
    }
  },
  {
    "img": "https://i.postimg.cc/wTc75YgT/img.png",
    "characteristics": {
      "decorativeTrim": {
        "decorativeThreshold": true,
        "coatingColor": "white",
        "finishingOutside": true,
        "finishingFromTheInside": false,
        "coatingOfCanvasAndBox": "grey"
      },
      "heatAndSoundInsulation": {
        "doorFrameInsulation": false,
        "fillerLayerThickness": "25 mm",
        "doorLeafFiller": "Plywood",
        "flammabilityClassOfTheFiller": "6",
        "applicationTemperatureOfTheFiller": "90"
      },
      "easeOfUse": {
        "doorHingeType": "Comfort +",
        "viewingAngleOfThePeephole": "180",
        "openingAngle": "90",
        "removableCornersToReplaceTheInnerPanel": "2",
        "electronicLockWithFingerprintScanner": true,
        "latchAdjuster": "Metal",
        "castleOfInvisibility": false,
        "numberOfDoorHinges": "5",
        "functionalValve": false,
        "closer": true,
        "peepholeHeight": "50 mm"
      },
      "protectionAgainstBreaking": {
        "lockBrand": "locka",
        "numberOfLocks": "2",
        "numberOfAntiRemovableClips": "4",
        "metalThickness": "6",
        "numberOfMetalSheets": "5",
        "armorPlate": false,
        "nightValve": true,
        "lockClass": "2",
        "numberOfStiffeners": "8",
        "armorPackage": false
      },
      "general": {
        "productName": "surona 4",
        "height": "2 m",
        "leafThickness": "54 mm",
        "frameType": "type 5",
        "manufacturer": "ninagoe",
        "width": "0.9 m",
        "openingSide": "left",
        "soundInsulationIndex": "1",
        "openingDirection": "right",
        "weight": "150 kg"
      },
      "accessories": {
        "threshold": true,
        "closer": true,
        "hardwareColor": "grey",
        "hingeDecor": false,
        "pen": "black"
      },
      "tightness": {
        "sealMaterial": "Plywood",
        "numberOfSealCircuits": "3"
      }
    },
    "id": 0,
    "security": "With thermal break",
    "material": "Scandinavian oak",
    "color": "Wenge",
    "name": "Expert pro tb1",
    "reviews": [
      {
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "grade": 5,
        "advantages": "Lorem ipsum dolor sit amet.",
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?"
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 3,
        "date": "April 17, 2021"
      },
      {
        "date": "April 17, 2021",
        "grade": 1,
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow",
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "date": "April 17, 2021",
        "city": "Moscow",
        "grade": 3,
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "userName": "Petrov Mikhail Vladimirovich"
      },
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow",
        "grade": 2,
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "date": "April 17, 2021"
      },
      {
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet.",
        "city": "Moscow",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 3,
        "userName": "Petrov Mikhail Vladimirovich"
      },
      {
        "city": "Moscow",
        "date": "April 17, 2021",
        "userName": "Petrov Mikhail Vladimirovich",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "grade": 5,
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?"
      },
      {
        "grade": 5,
        "advantages": "Lorem ipsum dolor sit amet.",
        "date": "April 17, 2021",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?"
      },
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "date": "April 17, 2021",
        "city": "Moscow",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 5
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "date": "April 17, 2021",
        "userName": "Petrov Mikhail Vladimirovich",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "city": "Moscow",
        "grade": 1
      }
    ],
    "finishing": "Solid",
    "discount": {
      "value": 10,
      "expiryDate": "2030-02-15T19:00:00.000Z"
    },
    "where": "house",
    "price": 46000
  },
  {
    "img": "https://i.postimg.cc/wTc75YgT/img.png",
    "price": 100000,
    "id": 11,
    "color": "White",
    "security": "With thermal break",
    "where": "apartment",
    "material": "Scandinavian oak",
    "characteristics": {
      "protectionAgainstBreaking": {
        "numberOfAntiRemovableClips": "4",
        "lockClass": "2",
        "nightValve": true,
        "numberOfLocks": "2",
        "metalThickness": "6",
        "lockBrand": "locka",
        "armorPackage": false,
        "numberOfStiffeners": "8",
        "numberOfMetalSheets": "5",
        "armorPlate": false
      },
      "heatAndSoundInsulation": {
        "doorLeafFiller": "Plywood",
        "fillerLayerThickness": "25 mm",
        "flammabilityClassOfTheFiller": "6",
        "doorFrameInsulation": false,
        "applicationTemperatureOfTheFiller": "90"
      },
      "accessories": {
        "hardwareColor": "grey",
        "hingeDecor": false,
        "threshold": true,
        "pen": "black",
        "closer": true
      },
      "general": {
        "height": "2 m",
        "soundInsulationIndex": "1",
        "weight": "150 kg",
        "openingDirection": "right",
        "width": "0.9 m",
        "leafThickness": "54 mm",
        "productName": "surona 4",
        "manufacturer": "ninagoe",
        "frameType": "type 5",
        "openingSide": "left"
      },
      "decorativeTrim": {
        "finishingFromTheInside": false,
        "decorativeThreshold": true,
        "finishingOutside": true,
        "coatingColor": "white",
        "coatingOfCanvasAndBox": "grey"
      },
      "tightness": {
        "sealMaterial": "Plywood",
        "numberOfSealCircuits": "3"
      },
      "easeOfUse": {
        "closer": true,
        "numberOfDoorHinges": "5",
        "viewingAngleOfThePeephole": "180",
        "functionalValve": false,
        "openingAngle": "90",
        "latchAdjuster": "Metal",
        "doorHingeType": "Comfort +",
        "peepholeHeight": "50 mm",
        "removableCornersToReplaceTheInnerPanel": "2",
        "castleOfInvisibility": false,
        "electronicLockWithFingerprintScanner": true
      }
    },
    "finishing": "MDF overlays",
    "reviews": [
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "grade": 5,
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "city": "Moscow",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021"
      },
      {
        "city": "Moscow",
        "advantages": "Lorem ipsum dolor sit amet.",
        "date": "April 17, 2021",
        "userName": "Petrov Mikhail Vladimirovich",
        "grade": 3,
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?"
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 1,
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow",
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "grade": 3,
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow"
      },
      {
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet.",
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "city": "Moscow",
        "grade": 2
      },
      {
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich",
        "grade": 3,
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "grade": 5,
        "advantages": "Lorem ipsum dolor sit amet.",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021",
        "userName": "Petrov Mikhail Vladimirovich",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "city": "Moscow"
      },
      {
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow",
        "advantages": "Lorem ipsum dolor sit amet.",
        "userName": "Petrov Mikhail Vladimirovich",
        "grade": 5
      },
      {
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021",
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "grade": 5,
        "city": "Moscow"
      },
      {
        "grade": 1,
        "date": "April 17, 2021",
        "city": "Moscow",
        "advantages": "Lorem ipsum dolor sit amet.",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich"
      }
    ],
    "name": "Expert pro tb67"
  },
  {
    "finishing": "With glass and mirror",
    "characteristics": {
      "general": {
        "width": "0.9 m",
        "soundInsulationIndex": "1",
        "height": "2 m",
        "openingSide": "left",
        "manufacturer": "ninagoe",
        "weight": "150 kg",
        "leafThickness": "54 mm",
        "frameType": "type 5",
        "productName": "surona 4",
        "openingDirection": "right"
      },
      "accessories": {
        "closer": true,
        "threshold": true,
        "hingeDecor": false,
        "pen": "black",
        "hardwareColor": "grey"
      },
      "easeOfUse": {
        "functionalValve": false,
        "peepholeHeight": "50 mm",
        "latchAdjuster": "Metal",
        "removableCornersToReplaceTheInnerPanel": "2",
        "castleOfInvisibility": false,
        "viewingAngleOfThePeephole": "180",
        "electronicLockWithFingerprintScanner": true,
        "doorHingeType": "Comfort +",
        "closer": true,
        "openingAngle": "90",
        "numberOfDoorHinges": "5"
      },
      "tightness": {
        "numberOfSealCircuits": "3",
        "sealMaterial": "Plywood"
      },
      "protectionAgainstBreaking": {
        "nightValve": true,
        "armorPackage": false,
        "lockBrand": "locka",
        "metalThickness": "6",
        "armorPlate": false,
        "numberOfLocks": "2",
        "lockClass": "2",
        "numberOfAntiRemovableClips": "4",
        "numberOfStiffeners": "8",
        "numberOfMetalSheets": "5"
      },
      "decorativeTrim": {
        "decorativeThreshold": true,
        "coatingColor": "white",
        "finishingFromTheInside": false,
        "coatingOfCanvasAndBox": "grey",
        "finishingOutside": true
      },
      "heatAndSoundInsulation": {
        "doorLeafFiller": "Plywood",
        "fillerLayerThickness": "25 mm",
        "applicationTemperatureOfTheFiller": "90",
        "doorFrameInsulation": false,
        "flammabilityClassOfTheFiller": "6"
      }
    },
    "price": 36500,
    "security": "Armored",
    "id": 6,
    "color": "Greens",
    "material": "Scandinavian oak",
    "name": "Expert pro arm3",
    "img": "https://i.postimg.cc/8PV7rz80/img-1.png",
    "where": "apartment",
    "reviews": [
      {
        "grade": 5,
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "date": "April 17, 2021"
      },
      {
        "date": "April 17, 2021",
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "city": "Moscow",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 3
      },
      {
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow",
        "grade": 1,
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021"
      },
      {
        "advantages": "Lorem ipsum dolor sit amet.",
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 3
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 2,
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "city": "Moscow",
        "date": "April 17, 2021",
        "userName": "Petrov Mikhail Vladimirovich"
      },
      {
        "city": "Moscow",
        "date": "April 17, 2021",
        "userName": "Petrov Mikhail Vladimirovich",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "grade": 3,
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?"
      },
      {
        "grade": 5,
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet.",
        "grade": 5,
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow"
      },
      {
        "date": "April 17, 2021",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "grade": 5
      },
      {
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "userName": "Petrov Mikhail Vladimirovich",
        "grade": 1,
        "city": "Moscow",
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet."
      }
    ]
  },
  {
    "id": 3,
    "discount": {
      "expiryDate": "2030-02-15T19:00:00.000Z",
      "value": 10
    },
    "characteristics": {
      "protectionAgainstBreaking": {
        "numberOfLocks": "2",
        "nightValve": true,
        "lockBrand": "locka",
        "numberOfStiffeners": "8",
        "numberOfAntiRemovableClips": "4",
        "lockClass": "2",
        "numberOfMetalSheets": "5",
        "armorPackage": false,
        "metalThickness": "6",
        "armorPlate": false
      },
      "easeOfUse": {
        "openingAngle": "90",
        "castleOfInvisibility": false,
        "closer": true,
        "peepholeHeight": "50 mm",
        "viewingAngleOfThePeephole": "180",
        "latchAdjuster": "Metal",
        "electronicLockWithFingerprintScanner": true,
        "numberOfDoorHinges": "5",
        "functionalValve": false,
        "removableCornersToReplaceTheInnerPanel": "2",
        "doorHingeType": "Comfort +"
      },
      "accessories": {
        "hingeDecor": false,
        "threshold": true,
        "hardwareColor": "grey",
        "closer": true,
        "pen": "black"
      },
      "general": {
        "openingSide": "left",
        "productName": "surona 4",
        "openingDirection": "right",
        "width": "0.9 m",
        "soundInsulationIndex": "1",
        "leafThickness": "54 mm",
        "height": "2 m",
        "manufacturer": "ninagoe",
        "weight": "150 kg",
        "frameType": "type 5"
      },
      "decorativeTrim": {
        "coatingOfCanvasAndBox": "grey",
        "coatingColor": "white",
        "finishingOutside": true,
        "finishingFromTheInside": false,
        "decorativeThreshold": true
      },
      "heatAndSoundInsulation": {
        "flammabilityClassOfTheFiller": "6",
        "applicationTemperatureOfTheFiller": "90",
        "doorLeafFiller": "Plywood",
        "fillerLayerThickness": "25 mm",
        "doorFrameInsulation": false
      },
      "tightness": {
        "sealMaterial": "Plywood",
        "numberOfSealCircuits": "3"
      }
    },
    "price": 50000,
    "material": "Scandinavian oak",
    "finishing": "With glass and mirror",
    "img": "https://i.postimg.cc/wTc75YgT/img.png",
    "name": "Expert pro tb53",
    "where": "house",
    "reviews": [
      {
        "advantages": "Lorem ipsum dolor sit amet.",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021",
        "grade": 5,
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow"
      },
      {
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich",
        "grade": 3
      },
      {
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 1,
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "grade": 3,
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow",
        "grade": 2,
        "advantages": "Lorem ipsum dolor sit amet.",
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?"
      },
      {
        "city": "Moscow",
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "grade": 3
      },
      {
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 5,
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet.",
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich"
      },
      {
        "city": "Moscow",
        "grade": 5,
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet.",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?"
      },
      {
        "grade": 5,
        "date": "April 17, 2021",
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?"
      },
      {
        "date": "April 17, 2021",
        "city": "Moscow",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "grade": 1,
        "userName": "Petrov Mikhail Vladimirovich"
      }
    ],
    "color": "Reds",
    "security": "Tamperproof"
  },
  {
    "img": "https://i.postimg.cc/8PV7rz80/img-1.png",
    "reviews": [
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet.",
        "grade": 5
      },
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 3,
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "grade": 1,
        "advantages": "Lorem ipsum dolor sit amet.",
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "city": "Moscow",
        "date": "April 17, 2021"
      },
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "city": "Moscow",
        "date": "April 17, 2021",
        "grade": 3,
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "grade": 2,
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021"
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 3,
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet.",
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?"
      },
      {
        "advantages": "Lorem ipsum dolor sit amet.",
        "grade": 5,
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021"
      },
      {
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "grade": 5,
        "city": "Moscow",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?"
      },
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 5,
        "date": "April 17, 2021"
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow",
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 1,
        "userName": "Petrov Mikhail Vladimirovich"
      }
    ],
    "finishing": "Solid",
    "security": "Armored",
    "where": "apartment",
    "price": 30000,
    "name": "Expert pro arm4563",
    "color": "Dark",
    "id": 65,
    "material": "Scandinavian oak",
    "characteristics": {
      "easeOfUse": {
        "openingAngle": "90",
        "removableCornersToReplaceTheInnerPanel": "2",
        "electronicLockWithFingerprintScanner": true,
        "latchAdjuster": "Metal",
        "peepholeHeight": "50 mm",
        "closer": true,
        "doorHingeType": "Comfort +",
        "numberOfDoorHinges": "5",
        "functionalValve": false,
        "viewingAngleOfThePeephole": "180",
        "castleOfInvisibility": false
      },
      "general": {
        "width": "0.9 m",
        "leafThickness": "54 mm",
        "openingSide": "left",
        "weight": "150 kg",
        "openingDirection": "right",
        "soundInsulationIndex": "1",
        "frameType": "type 5",
        "manufacturer": "ninagoe",
        "height": "2 m",
        "productName": "surona 4"
      },
      "accessories": {
        "closer": true,
        "threshold": true,
        "hingeDecor": false,
        "pen": "black",
        "hardwareColor": "grey"
      },
      "tightness": {
        "sealMaterial": "Plywood",
        "numberOfSealCircuits": "3"
      },
      "protectionAgainstBreaking": {
        "metalThickness": "6",
        "nightValve": true,
        "numberOfMetalSheets": "5",
        "lockBrand": "locka",
        "armorPlate": false,
        "numberOfLocks": "2",
        "numberOfAntiRemovableClips": "4",
        "armorPackage": false,
        "numberOfStiffeners": "8",
        "lockClass": "2"
      },
      "heatAndSoundInsulation": {
        "doorLeafFiller": "Plywood",
        "applicationTemperatureOfTheFiller": "90",
        "flammabilityClassOfTheFiller": "6",
        "fillerLayerThickness": "25 mm",
        "doorFrameInsulation": false
      },
      "decorativeTrim": {
        "coatingColor": "white",
        "finishingFromTheInside": false,
        "finishingOutside": true,
        "decorativeThreshold": true,
        "coatingOfCanvasAndBox": "grey"
      }
    }
  },
  {
    "reviews": [
      {
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow",
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 5,
        "userName": "Petrov Mikhail Vladimirovich"
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "date": "April 17, 2021",
        "grade": 3,
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "grade": 1,
        "city": "Moscow"
      },
      {
        "advantages": "Lorem ipsum dolor sit amet.",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021",
        "userName": "Petrov Mikhail Vladimirovich",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 3,
        "city": "Moscow"
      },
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "grade": 2,
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021"
      },
      {
        "grade": 3,
        "date": "April 17, 2021",
        "city": "Moscow",
        "advantages": "Lorem ipsum dolor sit amet.",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich"
      },
      {
        "city": "Moscow",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 5,
        "date": "April 17, 2021"
      },
      {
        "city": "Moscow",
        "grade": 5,
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021",
        "userName": "Petrov Mikhail Vladimirovich"
      },
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 5,
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "date": "April 17, 2021",
        "city": "Moscow"
      },
      {
        "city": "Moscow",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021",
        "grade": 1,
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet."
      }
    ],
    "img": "https://i.postimg.cc/wTc75YgT/img.png",
    "characteristics": {
      "heatAndSoundInsulation": {
        "doorFrameInsulation": false,
        "applicationTemperatureOfTheFiller": "90",
        "doorLeafFiller": "Plywood",
        "flammabilityClassOfTheFiller": "6",
        "fillerLayerThickness": "25 mm"
      },
      "decorativeTrim": {
        "coatingOfCanvasAndBox": "grey",
        "finishingFromTheInside": false,
        "finishingOutside": true,
        "decorativeThreshold": true,
        "coatingColor": "white"
      },
      "tightness": {
        "sealMaterial": "Plywood",
        "numberOfSealCircuits": "3"
      },
      "accessories": {
        "threshold": true,
        "hingeDecor": false,
        "closer": true,
        "hardwareColor": "grey",
        "pen": "black"
      },
      "protectionAgainstBreaking": {
        "lockClass": "2",
        "nightValve": true,
        "numberOfLocks": "2",
        "armorPlate": false,
        "metalThickness": "6",
        "armorPackage": false,
        "lockBrand": "locka",
        "numberOfStiffeners": "8",
        "numberOfAntiRemovableClips": "4",
        "numberOfMetalSheets": "5"
      },
      "easeOfUse": {
        "peepholeHeight": "50 mm",
        "electronicLockWithFingerprintScanner": true,
        "doorHingeType": "Comfort +",
        "functionalValve": false,
        "latchAdjuster": "Metal",
        "openingAngle": "90",
        "closer": true,
        "removableCornersToReplaceTheInnerPanel": "2",
        "viewingAngleOfThePeephole": "180",
        "numberOfDoorHinges": "5",
        "castleOfInvisibility": false
      },
      "general": {
        "leafThickness": "54 mm",
        "openingDirection": "right",
        "soundInsulationIndex": "1",
        "weight": "150 kg",
        "height": "2 m",
        "manufacturer": "ninagoe",
        "frameType": "type 5",
        "openingSide": "left",
        "productName": "surona 4",
        "width": "0.9 m"
      }
    },
    "name": "Expert pro arm45",
    "color": "Black",
    "finishing": "Forged",
    "where": "house",
    "id": 10,
    "material": "Scandinavian oak",
    "security": "Armored",
    "price": 26000
  },
  {
    "name": "Expert pro tb3",
    "reviews": [
      {
        "date": "April 17, 2021",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 5,
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "grade": 3,
        "advantages": "Lorem ipsum dolor sit amet.",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?"
      },
      {
        "city": "Moscow",
        "advantages": "Lorem ipsum dolor sit amet.",
        "userName": "Petrov Mikhail Vladimirovich",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021",
        "grade": 1
      },
      {
        "advantages": "Lorem ipsum dolor sit amet.",
        "date": "April 17, 2021",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 3,
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?"
      },
      {
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "date": "April 17, 2021",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 2
      },
      {
        "grade": 3,
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?"
      },
      {
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "city": "Moscow",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "userName": "Petrov Mikhail Vladimirovich",
        "grade": 5,
        "date": "April 17, 2021"
      },
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow",
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "date": "April 17, 2021",
        "grade": 5
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021",
        "userName": "Petrov Mikhail Vladimirovich",
        "grade": 5,
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "city": "Moscow"
      },
      {
        "advantages": "Lorem ipsum dolor sit amet.",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021",
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 1
      }
    ],
    "material": "Scandinavian oak",
    "img": "https://i.postimg.cc/wTc75YgT/img.png",
    "price": 86299,
    "discount": {
      "expiryDate": "2030-02-15T19:00:00.000Z",
      "value": 10
    },
    "characteristics": {
      "tightness": {
        "numberOfSealCircuits": "3",
        "sealMaterial": "Plywood"
      },
      "heatAndSoundInsulation": {
        "doorLeafFiller": "Plywood",
        "flammabilityClassOfTheFiller": "6",
        "applicationTemperatureOfTheFiller": "90",
        "doorFrameInsulation": false,
        "fillerLayerThickness": "25 mm"
      },
      "protectionAgainstBreaking": {
        "numberOfMetalSheets": "5",
        "armorPackage": false,
        "lockBrand": "locka",
        "numberOfStiffeners": "8",
        "numberOfAntiRemovableClips": "4",
        "lockClass": "2",
        "numberOfLocks": "2",
        "armorPlate": false,
        "metalThickness": "6",
        "nightValve": true
      },
      "easeOfUse": {
        "functionalValve": false,
        "removableCornersToReplaceTheInnerPanel": "2",
        "viewingAngleOfThePeephole": "180",
        "peepholeHeight": "50 mm",
        "electronicLockWithFingerprintScanner": true,
        "doorHingeType": "Comfort +",
        "numberOfDoorHinges": "5",
        "openingAngle": "90",
        "latchAdjuster": "Metal",
        "castleOfInvisibility": false,
        "closer": true
      },
      "general": {
        "width": "0.9 m",
        "weight": "150 kg",
        "frameType": "type 5",
        "openingSide": "left",
        "height": "2 m",
        "leafThickness": "54 mm",
        "openingDirection": "right",
        "soundInsulationIndex": "1",
        "manufacturer": "ninagoe",
        "productName": "surona 4"
      },
      "accessories": {
        "hardwareColor": "grey",
        "closer": true,
        "hingeDecor": false,
        "pen": "black",
        "threshold": true
      },
      "decorativeTrim": {
        "finishingOutside": true,
        "coatingColor": "white",
        "decorativeThreshold": true,
        "finishingFromTheInside": false,
        "coatingOfCanvasAndBox": "grey"
      }
    },
    "finishing": "Laminated chipboard",
    "security": "With thermal break",
    "color": "Black",
    "id": 7,
    "where": "house"
  },
  {
    "img": "https://i.postimg.cc/8PV7rz80/img-1.png",
    "color": "Light",
    "where": "apartment",
    "reviews": [
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow",
        "grade": 5,
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?"
      },
      {
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "grade": 3,
        "date": "April 17, 2021",
        "city": "Moscow",
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?"
      },
      {
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "grade": 1,
        "advantages": "Lorem ipsum dolor sit amet.",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?"
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "date": "April 17, 2021",
        "userName": "Petrov Mikhail Vladimirovich",
        "grade": 3
      },
      {
        "date": "April 17, 2021",
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 2,
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow"
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 3,
        "date": "April 17, 2021",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow",
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 5,
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet.",
        "userName": "Petrov Mikhail Vladimirovich",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "city": "Moscow"
      },
      {
        "city": "Moscow",
        "advantages": "Lorem ipsum dolor sit amet.",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 5
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "date": "April 17, 2021",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 5,
        "city": "Moscow"
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow",
        "advantages": "Lorem ipsum dolor sit amet.",
        "date": "April 17, 2021",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 1
      }
    ],
    "characteristics": {
      "general": {
        "productName": "surona 4",
        "soundInsulationIndex": "1",
        "frameType": "type 5",
        "width": "0.9 m",
        "openingDirection": "right",
        "weight": "150 kg",
        "height": "2 m",
        "leafThickness": "54 mm",
        "manufacturer": "ninagoe",
        "openingSide": "left"
      },
      "accessories": {
        "hardwareColor": "grey",
        "closer": true,
        "hingeDecor": false,
        "pen": "black",
        "threshold": true
      },
      "easeOfUse": {
        "openingAngle": "90",
        "viewingAngleOfThePeephole": "180",
        "doorHingeType": "Comfort +",
        "castleOfInvisibility": false,
        "closer": true,
        "removableCornersToReplaceTheInnerPanel": "2",
        "latchAdjuster": "Metal",
        "electronicLockWithFingerprintScanner": true,
        "functionalValve": false,
        "numberOfDoorHinges": "5",
        "peepholeHeight": "50 mm"
      },
      "tightness": {
        "numberOfSealCircuits": "3",
        "sealMaterial": "Plywood"
      },
      "heatAndSoundInsulation": {
        "fillerLayerThickness": "25 mm",
        "doorFrameInsulation": false,
        "flammabilityClassOfTheFiller": "6",
        "applicationTemperatureOfTheFiller": "90",
        "doorLeafFiller": "Plywood"
      },
      "protectionAgainstBreaking": {
        "nightValve": true,
        "armorPackage": false,
        "lockClass": "2",
        "lockBrand": "locka",
        "numberOfLocks": "2",
        "numberOfAntiRemovableClips": "4",
        "numberOfMetalSheets": "5",
        "numberOfStiffeners": "8",
        "metalThickness": "6",
        "armorPlate": false
      },
      "decorativeTrim": {
        "coatingOfCanvasAndBox": "grey",
        "decorativeThreshold": true,
        "coatingColor": "white",
        "finishingOutside": true,
        "finishingFromTheInside": false
      }
    },
    "name": "Expert pro arm7",
    "security": "Armored",
    "price": 300000,
    "material": "Scandinavian oak",
    "id": 4,
    "finishing": "MDF overlays"
  },
  {
    "characteristics": {
      "general": {
        "weight": "150 kg",
        "openingDirection": "right",
        "leafThickness": "54 mm",
        "height": "2 m",
        "width": "0.9 m",
        "soundInsulationIndex": "1",
        "frameType": "type 5",
        "productName": "surona 4",
        "manufacturer": "ninagoe",
        "openingSide": "left"
      },
      "decorativeTrim": {
        "coatingOfCanvasAndBox": "grey",
        "finishingOutside": true,
        "finishingFromTheInside": false,
        "coatingColor": "white",
        "decorativeThreshold": true
      },
      "accessories": {
        "threshold": true,
        "pen": "black",
        "closer": true,
        "hardwareColor": "grey",
        "hingeDecor": false
      },
      "tightness": {
        "sealMaterial": "Plywood",
        "numberOfSealCircuits": "3"
      },
      "heatAndSoundInsulation": {
        "doorLeafFiller": "Plywood",
        "applicationTemperatureOfTheFiller": "90",
        "doorFrameInsulation": false,
        "flammabilityClassOfTheFiller": "6",
        "fillerLayerThickness": "25 mm"
      },
      "protectionAgainstBreaking": {
        "metalThickness": "6",
        "armorPlate": false,
        "numberOfAntiRemovableClips": "4",
        "numberOfLocks": "2",
        "numberOfStiffeners": "8",
        "lockClass": "2",
        "nightValve": true,
        "numberOfMetalSheets": "5",
        "armorPackage": false,
        "lockBrand": "locka"
      },
      "easeOfUse": {
        "electronicLockWithFingerprintScanner": true,
        "removableCornersToReplaceTheInnerPanel": "2",
        "doorHingeType": "Comfort +",
        "latchAdjuster": "Metal",
        "numberOfDoorHinges": "5",
        "openingAngle": "90",
        "viewingAngleOfThePeephole": "180",
        "castleOfInvisibility": false,
        "closer": true,
        "functionalValve": false,
        "peepholeHeight": "50 mm"
      }
    },
    "price": 124000,
    "material": "Scandinavian oak",
    "reviews": [
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "userName": "Petrov Mikhail Vladimirovich",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "grade": 5,
        "city": "Moscow",
        "date": "April 17, 2021"
      },
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "grade": 3,
        "advantages": "Lorem ipsum dolor sit amet.",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?"
      },
      {
        "city": "Moscow",
        "grade": 1,
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "date": "April 17, 2021",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?"
      },
      {
        "city": "Moscow",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "date": "April 17, 2021",
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "grade": 3
      },
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "date": "April 17, 2021",
        "grade": 2,
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow"
      },
      {
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow",
        "advantages": "Lorem ipsum dolor sit amet.",
        "grade": 3,
        "date": "April 17, 2021",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?"
      },
      {
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "grade": 5,
        "city": "Moscow",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021"
      },
      {
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet.",
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 5
      },
      {
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet.",
        "city": "Moscow",
        "grade": 5
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 1,
        "advantages": "Lorem ipsum dolor sit amet."
      }
    ],
    "security": "With thermal break",
    "finishing": "Forged",
    "color": "Light",
    "img": "https://i.postimg.cc/wTc75YgT/img.png",
    "where": "apartment",
    "id": 5,
    "name": "Expert pro tb6"
  },
  {
    "color": "Black",
    "reviews": [
      {
        "grade": 5,
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "advantages": "Lorem ipsum dolor sit amet.",
        "grade": 3,
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow"
      },
      {
        "date": "April 17, 2021",
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 1,
        "city": "Moscow"
      },
      {
        "grade": 3,
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "advantages": "Lorem ipsum dolor sit amet.",
        "userName": "Petrov Mikhail Vladimirovich",
        "city": "Moscow",
        "date": "April 17, 2021"
      },
      {
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "grade": 2,
        "date": "April 17, 2021",
        "city": "Moscow",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?"
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 3,
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "date": "April 17, 2021",
        "city": "Moscow"
      },
      {
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 5,
        "city": "Moscow",
        "advantages": "Lorem ipsum dolor sit amet."
      },
      {
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "city": "Moscow",
        "advantages": "Lorem ipsum dolor sit amet.",
        "grade": 5,
        "date": "April 17, 2021",
        "userName": "Petrov Mikhail Vladimirovich",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?"
      },
      {
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "grade": 5,
        "userName": "Petrov Mikhail Vladimirovich",
        "advantages": "Lorem ipsum dolor sit amet.",
        "city": "Moscow",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?"
      },
      {
        "advantages": "Lorem ipsum dolor sit amet.",
        "userName": "Petrov Mikhail Vladimirovich",
        "date": "April 17, 2021",
        "disadvantages": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?",
        "comment": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?",
        "grade": 1,
        "city": "Moscow"
      }
    ],
    "price": 24000,
    "where": "apartment",
    "id": 2,
    "characteristics": {
      "easeOfUse": {
        "peepholeHeight": "50 mm",
        "latchAdjuster": "Metal",
        "viewingAngleOfThePeephole": "180",
        "castleOfInvisibility": false,
        "doorHingeType": "Comfort +",
        "closer": true,
        "removableCornersToReplaceTheInnerPanel": "2",
        "numberOfDoorHinges": "5",
        "openingAngle": "90",
        "functionalValve": false,
        "electronicLockWithFingerprintScanner": true
      },
      "tightness": {
        "sealMaterial": "Plywood",
        "numberOfSealCircuits": "3"
      },
      "protectionAgainstBreaking": {
        "armorPlate": false,
        "numberOfAntiRemovableClips": "4",
        "lockClass": "2",
        "numberOfStiffeners": "8",
        "lockBrand": "locka",
        "nightValve": true,
        "armorPackage": false,
        "metalThickness": "6",
        "numberOfLocks": "2",
        "numberOfMetalSheets": "5"
      },
      "decorativeTrim": {
        "finishingOutside": true,
        "decorativeThreshold": true,
        "coatingOfCanvasAndBox": "grey",
        "coatingColor": "white",
        "finishingFromTheInside": false
      },
      "general": {
        "productName": "surona 4",
        "openingSide": "left",
        "width": "0.9 m",
        "manufacturer": "ninagoe",
        "leafThickness": "54 mm",
        "frameType": "type 5",
        "openingDirection": "right",
        "soundInsulationIndex": "1",
        "weight": "150 kg",
        "height": "2 m"
      },
      "heatAndSoundInsulation": {
        "applicationTemperatureOfTheFiller": "90",
        "fillerLayerThickness": "25 mm",
        "flammabilityClassOfTheFiller": "6",
        "doorLeafFiller": "Plywood",
        "doorFrameInsulation": false
      },
      "accessories": {
        "threshold": true,
        "pen": "black",
        "closer": true,
        "hingeDecor": false,
        "hardwareColor": "grey"
      }
    },
    "material": "Scandinavian oak",
    "finishing": "Forged",
    "img": "https://i.postimg.cc/wTc75YgT/img.png",
    "name": "Expert pro tb2",
    "security": "With thermal break"
  }
]

jest.spyOn(redux, 'useSelector').mockReturnValueOnce(fakeProducts);
jest.mock('react-redux', () => {
  return {
    __esModule: true,
    ...jest.requireActual('react-redux'),
    useSelector: () => fakeProducts,
  };
});

describe('Catalog', () => {
  describe('Render filtred items', () => {
    it('renders items with a specific security setting', () => {
      const securityProperty: SecurityItemType = 'Armored';
      const ProductsWithCurrentProperty = fakeProducts.filter(i => i.security === securityProperty);

      render(<Products
        itemsPerPage={50}
        allItems={fakeProducts}
        activeSecurityItem={securityProperty}
        startPriceFromItem={null}
        whereItem={undefined}
        activeCategoryItems={[]}
        isPaginationReset={false}
        setIsPaginationReset={jest.fn()}
      />);

      expect(screen.getByLabelText('Products').childElementCount).toBe(ProductsWithCurrentProperty.length);
    });

    it('renders items with a where setting', () => {
      const whereProperty: ProductType['where'] = 'apartment';
      const ProductsWithCurrentProperty = fakeProducts.filter(i => i.where === whereProperty);

      render(<Products
        itemsPerPage={50}
        allItems={fakeProducts}
        activeSecurityItem={null}
        startPriceFromItem={null}
        whereItem={whereProperty}
        activeCategoryItems={[]}
        isPaginationReset={false}
        setIsPaginationReset={jest.fn()}
      />);

      expect(screen.getByLabelText('Products').childElementCount).toBe(ProductsWithCurrentProperty.length);
    });

    it('Items with all the settings', () => {
      render(<Products
        itemsPerPage={50}
        allItems={fakeProducts}
        activeSecurityItem={'Armored'}
        startPriceFromItem={'Descending'}
        whereItem={'apartment'}
        activeCategoryItems={[
          {
            "category": "price",
            "items": [
              "30 000 ₽ — 50 000 ₽",
              "50 000 ₽ — 70 000 ₽"
            ]
          },
          {
            "category": "finishing",
            "items": [
              "Forged",
              "Solid"
            ]
          },
          {
            "category": "color",
            "items": [
              "White"
            ]
          }
        ]}
        isPaginationReset={false}
        setIsPaginationReset={jest.fn()}
      />);

      expect(screen.getByLabelText('Products').childElementCount).toBe(1);
    });
  });
});