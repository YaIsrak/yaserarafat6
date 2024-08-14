import { Button } from "@/components/ui/button";
import CustomLink from "@/components/ui/link";

export default function ThemePage() {
  return (
    <section className="section">
      <div className="container">
        {/* Heading */}
        <div className="flex justify-between">
          <div>
            <h1 className="text-primary">Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
          </div>
          <div className="flex gap-3">
            <div className="h-24 w-24 rounded-xl bg-primary p-2">#cc6448</div>
            <div className="h-24 w-24 rounded-xl bg-secondary p-2 text-primary">
              #ffdfbf
            </div>
          </div>
        </div>
        <br />
        {/* Paragraph */}
        <p className="text-2xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          luctus dictum pretium. Aliquam erat volutpat. Phasellus varius leo
          nunc, sed dapibus erat hendrerit vel. Sed eu nisi eget nibh tincidunt
          finibus. Aenean euismod, nunc vitae porta placerat, risus lorem
          accumsan urna, ac consequat tellus purus nec quam. Donec erat augue,
          placerat eget erat eu, accumsan eleifend metus. Pellentesque eu magna
          sit amet mauris ultrices facilisis. Ut interdum lectus eu nisi
          ultricies, eu vehicula ligula dictum. In mollis tincidunt leo, nec
          dictum elit aliquam sit amet. Maecenas dapibus cursus enim, vitae
          aliquet tellus finibus in. Praesent non sapien sit amet odio hendrerit
          vestibulum.
        </p>
        <br />
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          luctus dictum pretium. Aliquam erat volutpat. Phasellus varius leo
          nunc, sed dapibus erat hendrerit vel. Sed eu nisi eget nibh tincidunt
          finibus. Aenean euismod, nunc vitae porta placerat, risus lorem
          accumsan urna, ac consequat tellus purus nec quam. Donec erat augue,
          placerat eget erat eu, accumsan eleifend metus. Pellentesque eu magna
          sit amet mauris ultrices facilisis. Ut interdum lectus eu nisi
          ultricies, eu vehicula ligula dictum. In mollis tincidunt leo, nec
          dictum elit aliquam sit amet. Maecenas dapibus cursus enim, vitae
          aliquet tellus finibus in. Praesent non sapien sit amet odio hendrerit
          vestibulum.
        </p>
        <br />
        <p className="text-sm text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          luctus dictum pretium. Aliquam erat volutpat. Phasellus varius leo
          nunc, sed dapibus erat hendrerit vel. Sed eu nisi eget nibh tincidunt
          finibus. Aenean euismod, nunc vitae porta placerat, risus lorem
          accumsan urna, ac consequat tellus purus nec quam. Donec erat augue,
          placerat eget erat eu, accumsan eleifend metus. Pellentesque eu magna
          sit amet mauris ultrices facilisis. Ut interdum lectus eu nisi
          ultricies, eu vehicula ligula dictum. In mollis tincidunt leo, nec
          dictum elit aliquam sit amet. Maecenas dapibus cursus enim, vitae
          aliquet tellus finibus in. Praesent non sapien sit amet odio hendrerit
          vestibulum.
        </p>
        <br />
        {/* Button */}
        <div className="flex gap-4">
          <Button>Click me</Button>
          <Button variant={"secondary"}>Click me</Button>
        </div>
        <br />
        {/* Link */}
        <CustomLink href="/">Csdsdd sdsds</CustomLink> <br />
        <CustomLink href="/theme">Theme</CustomLink>
        <br />
        <br />
      </div>
    </section>
  );
}
