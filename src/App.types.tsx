import { useEffect, useState, Dispatch, SetStateAction, createRef } from 'react';

export interface IInitialContext {clearFilters: boolean, setClearFilters: Dispatch<SetStateAction<boolean>>}
