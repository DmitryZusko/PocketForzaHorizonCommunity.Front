import {
  getManufacturesAsync,
  manufacturesSelector,
  postManufactureAsync,
  setIsAddManufactureOpen,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { ManufactureAlreadyExists, toastHandler } from "@/utilities";
import { useFormik } from "formik";
import { useCallback, useEffect } from "react";
import { validationScheme } from "./constants";

export const useAddManufactureFormComponent = () => {
  const { manufactures } = useAppSelector(manufacturesSelector);

  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (values: { manufactureName: string; country: string }) => {
      if (manufactures.find((m) => m.name === values.manufactureName)) {
        toastHandler.showError(ManufactureAlreadyExists);
        return;
      }

      dispatch(
        postManufactureAsync({ name: values.manufactureName, country: values.country }),
      ).then((result) => result.payload && dispatch(setIsAddManufactureOpen(false)));
    },
    [manufactures, dispatch],
  );

  const formik = useFormik({
    initialValues: {
      manufactureName: "",
      country: "",
    },
    validationSchema: validationScheme,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleCancel = useCallback(() => {
    dispatch(setIsAddManufactureOpen(false));
  }, [dispatch]);

  useEffect(() => {
    if (manufactures.length) return;
    dispatch(getManufacturesAsync({}));
  }, [manufactures, dispatch]);
  return { formik, handleCancel };
};
