import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";

export default async function Page (props: {params:Promise<{citationId:string}>}){
    
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>{JSON.stringify(await props.params,null,2)}</CardTitle>
            </CardHeader>
        </Card>
    );
}