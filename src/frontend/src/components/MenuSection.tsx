import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/918889431668";

type SubSection = {
  title: string;
  items: { name: string; price: string }[];
};

type MenuCard = {
  id: string;
  title: string;
  emoji: string;
  gradient: string;
  subsections: SubSection[];
};

const MENU_CARDS: MenuCard[] = [
  {
    id: "pizza",
    title: "Pizza Junction",
    emoji: "🍕",
    gradient: "linear-gradient(135deg, #00F5FF, #7C3AED)",
    subsections: [
      {
        title: "Classic Pizza 8 Inch",
        items: [
          { name: "Cheese Onion Pizza", price: "₹110" },
          { name: "Cheese Capsicum Pizza", price: "₹110" },
          { name: "Cheese Tomato Pizza", price: "₹110" },
          { name: "Cheese Corn Pizza", price: "₹120" },
          { name: "Cheese Tomato Capsicum Pizza", price: "₹120" },
          { name: "Cheese Onion Capsicum Pizza", price: "₹120" },
          { name: "Cheese Onion Tomato Pizza", price: "₹120" },
        ],
      },
      {
        title: "Premium Pizza 8 Inch",
        items: [
          { name: "Vegetable Cheese Pizza", price: "₹130" },
          { name: "Classic Paneer Pizza", price: "₹160" },
          { name: "Margherita Pizza", price: "₹170" },
          { name: "Cheese Paneer Onion Pizza", price: "₹170" },
          { name: "Double Cheese Margherita Pizza", price: "₹180" },
          { name: "Fully Loaded Pizza", price: "₹180" },
        ],
      },
      {
        title: "Paneer Special",
        items: [
          { name: "Chilly Paneer Pizza", price: "₹190" },
          { name: "Peppy Paneer Pizza", price: "₹190" },
          { name: "Black Olives Paneer Pizza", price: "₹190" },
          { name: "Jalapeno Paneer Pizza", price: "₹190" },
          { name: "Green Olives Paneer Pizza", price: "₹190" },
        ],
      },
      {
        title: "ChefZone Choice",
        items: [
          { name: "Cheese Burst", price: "₹180" },
          { name: "Farm House Pizza", price: "₹190" },
          { name: "ChefZone Special Pizza", price: "₹200" },
        ],
      },
    ],
  },
  {
    id: "burgers",
    title: "Burgers & Sandwiches",
    emoji: "🍔",
    gradient: "linear-gradient(135deg, #D4AF37, #7C3AED)",
    subsections: [
      {
        title: "Burgers Zone",
        items: [
          { name: "Aloo Tikki Burger", price: "₹70" },
          { name: "Cheesy Aloo Tikki Burger", price: "₹80" },
          { name: "Spicy Cheesy Burger", price: "₹90" },
          { name: "Cheesy Schezwan Burger", price: "₹100" },
          { name: "Double Tikki Burger", price: "₹110" },
          { name: "Mexican Burger", price: "₹120" },
          { name: "Cheese Mexican Burger", price: "₹130" },
          { name: "Cheesy Double Tikki Burger", price: "₹140" },
          { name: "Paneer Masala Burger", price: "₹160" },
          { name: "Cheesy Paneer Masala Burger", price: "₹180" },
          { name: "Paneer Masala Tikki Burger", price: "₹200" },
          { name: "Cheesy Paneer Masala Tikki Burger", price: "₹220" },
          { name: "ChefZone Special Burger", price: "₹250" },
        ],
      },
      {
        title: "Classic Sandwich",
        items: [
          { name: "Cheese Chutney Sandwich", price: "₹50" },
          { name: "Plain Veg Sandwich", price: "₹50" },
          { name: "Veg Grilled Sandwich", price: "₹80" },
          { name: "Cheese Veg Sandwich", price: "₹110" },
          { name: "Double Layer Cheese Chutney Sandwich", price: "₹270" },
        ],
      },
      {
        title: "Premium Sandwich",
        items: [
          { name: "Masala Sandwich", price: "₹100" },
          { name: "Grilled Cheese Sandwich", price: "₹100" },
          { name: "Corn Cheese Sandwich", price: "₹120" },
          { name: "Cheese Masala Sandwich", price: "₹120" },
          { name: "Paneer Masala Sandwich", price: "₹140" },
        ],
      },
      {
        title: "Chef Choice",
        items: [
          { name: "Jain Sandwich", price: "₹90" },
          { name: "Indori Masala Sandwich", price: "₹120" },
          { name: "Cheese Indori Masala Sandwich", price: "₹140" },
          { name: "Cheese Paneer Masala Sandwich", price: "₹150" },
          { name: "ChefZone Special Sandwich", price: "₹170" },
        ],
      },
    ],
  },
  {
    id: "momos",
    title: "Momos Zone",
    emoji: "🥟",
    gradient: "linear-gradient(135deg, #7C3AED, #00F5FF)",
    subsections: [
      {
        title: "Steamed Momos 8 Pcs",
        items: [
          { name: "Veg Steam", price: "₹90" },
          { name: "Cheese Corn Steam", price: "₹120" },
          { name: "Paneer Steam", price: "₹120" },
        ],
      },
      {
        title: "Fried Momos 8 Pcs",
        items: [
          { name: "Veg Fried", price: "₹100" },
          { name: "Cheese Corn Fried", price: "₹140" },
          { name: "Paneer Fried", price: "₹140" },
        ],
      },
    ],
  },
  {
    id: "fries",
    title: "French Fries",
    emoji: "🍟",
    gradient: "linear-gradient(135deg, #D4AF37, #00F5FF)",
    subsections: [
      {
        title: "French Fries",
        items: [
          { name: "Plain French Fries", price: "₹70" },
          { name: "Salty French Fries", price: "₹80" },
          { name: "Peri Peri French Fries", price: "₹90" },
          { name: "Tandoori Mayo French Fries", price: "₹120" },
          { name: "Cheesy French Fries", price: "₹150" },
        ],
      },
    ],
  },
  {
    id: "maggie",
    title: "Maggie Zone",
    emoji: "🍜",
    gradient: "linear-gradient(135deg, #00F5FF, #D4AF37)",
    subsections: [
      {
        title: "Maggie Zone",
        items: [
          { name: "Plain Maggie", price: "₹50" },
          { name: "Masala Maggie", price: "₹80" },
          { name: "Schezwan Maggie", price: "₹90" },
          { name: "Cheese Corn Maggie", price: "₹90" },
          { name: "Cheesy Spicy Maggie", price: "₹90" },
          { name: "Creamy Cheesy Maggie", price: "₹90" },
          { name: "Cheesy Masala Maggie", price: "₹90" },
          { name: "Cheesy Schezwan Maggie", price: "₹100" },
          { name: "Paneer Masala Maggie", price: "₹100" },
          { name: "Cheese Paneer Masala Maggie", price: "₹120" },
          { name: "ChefZone Special Maggie", price: "₹150" },
        ],
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    emoji: "🍝",
    gradient: "linear-gradient(135deg, #7C3AED, #D4AF37)",
    subsections: [
      {
        title: "Classic Pasta",
        items: [
          { name: "Red Sauce Pasta", price: "₹150" },
          { name: "White Sauce Pasta", price: "₹150" },
        ],
      },
      {
        title: "Premium Pasta",
        items: [
          { name: "Italian White Sauce Pasta", price: "₹200" },
          { name: "Italian Red Sauce Pasta", price: "₹200" },
        ],
      },
    ],
  },
];

function MenuCardComponent({ card, idx }: { card: MenuCard; idx: number }) {
  const [open, setOpen] = useState(false);
  const totalItems = card.subsections.reduce(
    (sum, s) => sum + s.items.length,
    0,
  );

  return (
    <motion.div
      data-ocid={`menu.card.${idx + 1}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.07 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.7)",
        border: "1px solid rgba(196,181,253,0.5)",
        boxShadow:
          "0 4px 24px rgba(196,181,253,0.1), 0 1px 0 rgba(255,255,255,0.5) inset",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="h-1 w-full" style={{ background: card.gradient }} />
      <button
        type="button"
        data-ocid={`menu.card.${idx + 1}.toggle`}
        className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
        style={{ background: open ? "rgba(196,181,253,0.25)" : "transparent" }}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span
            className="text-3xl w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(196,181,253,0.4)",
              boxShadow: "0 2px 8px rgba(196,181,253,0.15)",
            }}
          >
            {card.emoji}
          </span>
          <div>
            <h3
              className="text-lg font-bold font-display"
              style={{ color: "#1e1b4b" }}
            >
              {card.title}
            </h3>
            <p
              className="text-xs mt-0.5 font-medium"
              style={{ color: "#7C3AED" }}
            >
              {totalItems} items
            </p>
          </div>
        </div>
        <span
          className="text-lg font-bold transition-transform duration-300 shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            color: "#1e1b4b",
            background: "rgba(196,181,253,0.3)",
            border: "1px solid rgba(196,181,253,0.5)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        >
          ↓
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="h-px mx-6"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(196,181,253,0.6), transparent)",
              }}
            />
            <div className="px-6 pb-6 pt-4">
              {card.subsections.map((sub, subIdx) => (
                <div key={sub.title} className={subIdx > 0 ? "mt-6" : ""}>
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="h-4 w-1 rounded-full shrink-0"
                      style={{
                        background: "linear-gradient(180deg, #00F5FF, #7C3AED)",
                      }}
                    />
                    <h4
                      className="text-sm font-bold uppercase tracking-wider"
                      style={{ color: "#1e1b4b" }}
                    >
                      {sub.title}
                    </h4>
                  </div>
                  <ol className="space-y-2">
                    {sub.items.map((item, itemIdx) => (
                      <li
                        key={`${sub.title}-${itemIdx}`}
                        data-ocid={`menu.card.${idx + 1}.sub.${subIdx + 1}.item.${itemIdx + 1}`}
                        className="flex items-center justify-between gap-3"
                      >
                        <span className="flex items-center gap-2 min-w-0">
                          <span
                            className="shrink-0 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
                            style={{
                              background: "rgba(196,181,253,0.3)",
                              color: "#7C3AED",
                              border: "1px solid rgba(196,181,253,0.4)",
                            }}
                          >
                            {itemIdx + 1}
                          </span>
                          <span
                            className="text-sm leading-relaxed truncate"
                            style={{ color: "#1e1b4b" }}
                          >
                            {item.name}
                          </span>
                        </span>
                        <span
                          className="shrink-0 text-sm font-semibold"
                          style={{ color: "#7C3AED" }}
                        >
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`menu.card.${idx + 1}.order_button`}
                className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  boxShadow: "0 0 16px rgba(37,211,102,0.35)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L0 24l6.332-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.017-1.376l-.36-.214-3.726.888.921-3.617-.235-.372A9.794 9.794 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                </svg>
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function MenuSection() {
  return (
    <section
      id="menu"
      data-ocid="menu.section"
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #EDE9FE 0%, #CFFAFE 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/4 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(196,181,253,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(207,250,254,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-3 px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(196,181,253,0.4)",
              border: "1px solid rgba(196,181,253,0.6)",
              color: "#1e1b4b",
            }}
          >
            Full Menu
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3"
            style={{
              background:
                "linear-gradient(135deg, #1e1b4b 0%, #7C3AED 50%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Menu
          </h2>
          <p
            className="mt-2 text-sm uppercase tracking-widest"
            style={{ color: "#1e1b4b" }}
          >
            100% Pure Veg &bull; Fresh &bull; Delicious
          </p>
          <div
            className="mx-auto mt-4 h-0.5 w-28 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4AF37, #7C3AED, transparent)",
            }}
          />
          <p className="mt-3 text-xs" style={{ color: "#1e1b4b" }}>
            Click on a category to expand the menu
          </p>
        </motion.div>

        <div className="space-y-4">
          {MENU_CARDS.map((card, idx) => (
            <MenuCardComponent key={card.id} card={card} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
