"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogHeader } from "./ui/dialog"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import ContactSvg from "./animSvg/ContactSvg"

export const ContactDialog = ( ) => {
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="text-xl h-10 bg-secondary hover:bg-primary-foreground hover:text-primary">Contactez-moi <ContactSvg className="ml-4 w-6 h-6"/></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Contactez-moi </DialogTitle>
                    <DialogDescription>
                        En espérant vous revoir prochainement !
                    </DialogDescription>
                </DialogHeader>
                <form className="flex flex-col gap-4">
                    <Label htmlFor="name">Nom</Label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Nom"
                    />
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                    />
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                        rows={5}
                        id="message"
                        placeholder="Message"
                    />
                    <Button type="submit" className="bg-secondary hover:bg-primary">Envoyer</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}