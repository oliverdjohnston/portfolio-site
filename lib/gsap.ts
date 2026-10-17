import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(useGSAP, CustomEase);

CustomEase.create('ui-out', '0.23, 1, 0.32, 1');

export { gsap, useGSAP };
