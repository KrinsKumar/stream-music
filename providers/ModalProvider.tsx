"use client";

import { useState, useEffect } from "react";

import AuthModal from "@/components/authModal";
import UploadModal from "@/components/uploadModal"

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) return null;

    return (
        <>
            <AuthModal />
            <UploadModal />
        </>
    );
}
 
export default ModalProvider;