import { buttonVariants } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import Link from "next/link";

export default function Page(){
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>
                    URL : /admin
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <Link href="/admin/citations/1" className={buttonVariants({size:'lg',variant:'outline'})}>
                    Citations 1
                </Link>
                <Link href="/admin/citations/melvyn" className={buttonVariants({size:'lg',variant:'outline'})}>
                    Citations Melvyn
                </Link>
                <Link href="/admin/citations/gta6" className={buttonVariants({size:'lg',variant:'outline'})}>
                    Citations GTA 6
                </Link>
                <Link href="/admin/citations/God" className={buttonVariants({size:'lg',variant:'outline'})}>
                    Citations God
                </Link>
            </CardContent>
        </Card>
    );
}