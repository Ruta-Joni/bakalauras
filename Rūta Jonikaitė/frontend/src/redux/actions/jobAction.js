import axios from 'axios';
import { toast } from "react-toastify";
import {
    JOB_LOAD_FAIL,
    JOB_LOAD_REQUEST,
    JOB_LOAD_SINGLE_FAIL,
    JOB_LOAD_SINGLE_REQUEST,
    JOB_LOAD_SINGLE_SUCCESS,
    JOB_LOAD_SUCCESS,
    JOB_DELETE_FAIL,
    JOB_DELETE_REQUEST,
    JOB_DELETE_SUCCESS,
    JOB_CREATE_FAIL,
    JOB_CREATE_REQUEST,
    JOB_CREATE_SUCCESS,
    JOB_TYPE_LOAD_FAIL,
    JOB_TYPE_LOAD_REQUEST, 
    JOB_TYPE_LOAD_SUCCESS
} from "../constants/jobconstant"


export const jobLoadAction = (pageNumber, keyword = '', cat = '',jobSen = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&jobSen=${jobSen}&location=${location}`)
        dispatch({
            type: JOB_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}


export const jobLoadSingleAction = (id) => async (dispatch) => {
    dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
    try {
        const { data } = await axios.get(`/api/job/${id}`);
        dispatch({
            type: JOB_LOAD_SINGLE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_SINGLE_FAIL,
            payload: error.response.data.error
        });
    }
}

export const jobDeleteAction = (id) => async (dispatch) => {
    dispatch({ type: JOB_DELETE_REQUEST });
    try {
        const { data } = await axios.delete("/api/job/delete/"+id);

        dispatch({
            type: JOB_DELETE_SUCCESS,
            payload: data
        });
        toast.success("Skelbimas ištrintas sėkmingai");
    } catch (error) {
        dispatch({
            type: JOB_DELETE_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}


export const jobCreateAction = (job) => async (dispatch) => {
    dispatch({ type: JOB_CREATE_REQUEST });
    try {
        const { data } = await axios.post("/api/job/create", job);

        dispatch({
            type: JOB_CREATE_SUCCESS,
            payload: data
        });
        toast.success("Skelbimas pridėta sėkmingai");
    } catch (error) {
        dispatch({
            type: JOB_CREATE_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

export const jobTypeLoadAction = () => async (dispatch) => {
    dispatch({ type: JOB_TYPE_LOAD_REQUEST });
    try {
        const { data } = await axios.get('/api/type/jobs');
        dispatch({
            type: JOB_TYPE_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_TYPE_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}
