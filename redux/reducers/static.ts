import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export type ProductType = {
  name: string
  img: string
  price: number
  material: string
  id: number
  security: 'With thermal break' | 'Tamperproof' | 'Armored'
  where: 'apartment' | 'house'
  finishing: string
  color: string
  isUnique: boolean
  discount?: {
    value: number
    expiryDate: string
  }
  characteristics: {
    general: {
      manufacturer: string
      productName: string
      openingDirection: string
      openingSide: string
      leafThickness: string
      frameType: string
      soundInsulationIndex: string
      height: string
      width: string
      weight: string
    }
    protectionAgainstBreaking: {
      numberOfMetalSheets: string
      metalThickness: string
      numberOfStiffeners: string
      numberOfAntiRemovableClips: string
      numberOfLocks: string
      lockBrand: string
      lockClass: string
      armorPlate: boolean
      armorPackage: boolean
      nightValve: boolean
    },
    decorativeTrim: {
      coatingOfCanvasAndBox: string
      coatingColor: string
      finishingOutside: boolean
      finishingFromTheInside: boolean
      decorativeThreshold: boolean
    },
    accessories: {
      hardwareColor: string
      pen: string
      closer: boolean
      threshold: boolean
      hingeDecor: boolean
    },
    heatAndSoundInsulation: {
      doorLeafFiller: string
      fillerLayerThickness: string
      flammabilityClassOfTheFiller: string
      applicationTemperatureOfTheFiller: string
      doorFrameInsulation: boolean
    },
    tightness: {
      numberOfSealCircuits: string
      sealMaterial: string
    },
    easeOfUse: {
      doorHingeType: string
      numberOfDoorHinges: string
      openingAngle: string
      removableCornersToReplaceTheInnerPanel: string
      functionalValve: boolean
      castleOfInvisibility: boolean
      electronicLockWithFingerprintScanner: boolean
      latchAdjuster: string
      closer: boolean
      peepholeHeight: string
      viewingAngleOfThePeephole: string
    },
  }
  reviews: {
    grade: number
    userName: string
    date: string
    city: string
    advantages: string
    disadvantages: string
    comment: string
  }[]
}

export type StockItemType = {
  heading: string
  description: string
  img: {
    src: string
    alt: string
  }
  id: number
}

export type ReviewItemType = {
  img: string
  personName: string
  review: string
}

const initialState = {
  products: [] as ProductType[],
  stock: [] as StockItemType[],
  reviews: [] as ReviewItemType[],
}

export type StaticStateType = typeof initialState

export const fetchStaticItems = createAsyncThunk(
  'static/fetchStaticItems',
  async () => {
    let response = await axios.get('/api/staticItems');

    return response.data as StaticStateType;
  }
);

const staticReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchStaticItems.fulfilled, (state, action) => {
      return {...state, ...action.payload};
    })
});

export default staticReducer;