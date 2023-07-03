import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { useState } from "react";

import Modal from "./Modal"
import useUploadModal from "../hooks/useUploadModal"
import Input from "./Input"
import Button from "./Button"

const UploadModal = () => {

    const [isLoading, setIsLoading] = useState(false); 
    const uploadModal = useUploadModal();

    const { register, handleSubmit, reset } = useForm<FieldValues>({
        defaultValues: {
            author: "",
            title: "",
            song: null,
            image: null,
        } 
    });

    const onChange = (open: boolean) => {
        if (!open) {
            reset();
            uploadModal.onClose();
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        //upload to supabase
    }

    return (
        <Modal title="Add a Song" description="Upload an mp3 file" isOpen={uploadModal.isOpen} onChange={onChange} >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
                <Input id="title" disabled={isLoading} {...register("title", { required: true })} placeholder="Song Title"/>
                <Input id="author" disabled={isLoading} {...register("author", { required: true })} placeholder="Song Author"/>
                <div>
                    <div className="pb-1">
                        Select a song file
                    </div>
                    <Input id="song" type="file" accept=".mp3" disabled={isLoading} {...register("song", { required: true })} placeholder="Song Author"/>
                </div>
                <div>
                    <div className="pb-1">
                        Select an image
                    </div>
                    <Input id="image" type="file" accept="image/*" disabled={isLoading} {...register("image", { required: true })} placeholder="Song Author"/>
                </div>
                <Button disabled={isLoading} type="submit">
                    Create
                </Button>
            </form>
        </Modal>
    );
}
 1
export default UploadModal;